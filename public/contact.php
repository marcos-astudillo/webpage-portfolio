<?php
/**
 * Contact Form Handler
 * Handles POST requests from the React contact form.
 * Compatible with shared hosting (HostGator, etc.)
 *
 * Usage: Place this file in the same directory as index.html (dist/ folder)
 *        Update $recipientEmail below before deploying.
 */

// ─────────────────────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────────────────────
$recipientEmail = 'm.astudillo1986@gmail.com'; // Change to your email
$subjectPrefix  = '[marcosastudillo.com] ';
$allowedOrigin  = 'https://marcosastudillo.com'; // Update to your domain

// ─────────────────────────────────────────────────────────────
// CORS & Content-Type Headers
// ─────────────────────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . $allowedOrigin);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// ─────────────────────────────────────────────────────────────
// Rate Limiting (simple session-based, 5 messages per hour)
// ─────────────────────────────────────────────────────────────
session_start();
$now = time();
if (!isset($_SESSION['contact_submissions'])) {
    $_SESSION['contact_submissions'] = [];
}

// Remove entries older than 1 hour
$_SESSION['contact_submissions'] = array_filter(
    $_SESSION['contact_submissions'],
    fn($ts) => $now - $ts < 3600
);

if (count($_SESSION['contact_submissions']) >= 5) {
    http_response_code(429);
    echo json_encode(['error' => 'Too many requests. Please try again later.']);
    exit();
}

// ─────────────────────────────────────────────────────────────
// Parse & Validate Input
// ─────────────────────────────────────────────────────────────
$raw   = file_get_contents('php://input');
$data  = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON payload']);
    exit();
}

$name    = isset($data['name'])    ? trim(strip_tags($data['name']))    : '';
$email   = isset($data['email'])   ? trim(strip_tags($data['email']))   : '';
$subject = isset($data['subject']) ? trim(strip_tags($data['subject'])) : '';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

// Validation
$errors = [];
if (empty($name))                              $errors[] = 'Name is required';
if (empty($email))                             $errors[] = 'Email is required';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Invalid email address';
if (empty($subject))                           $errors[] = 'Subject is required';
if (empty($message))                           $errors[] = 'Message is required';
elseif (strlen($message) < 10)                 $errors[] = 'Message too short';
elseif (strlen($message) > 5000)               $errors[] = 'Message too long';

// Honeypot check (if you add a hidden field named "website" in the form)
if (!empty($data['website'])) {
    // Silently reject bot
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit();
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['error' => 'Validation failed', 'details' => $errors]);
    exit();
}

// ─────────────────────────────────────────────────────────────
// Build Email
// ─────────────────────────────────────────────────────────────
$emailSubject = $subjectPrefix . htmlspecialchars($subject);

$emailBody  = "You received a new contact form submission from marcosastudillo.com\n\n";
$emailBody .= "─────────────────────────────────\n";
$emailBody .= "Name:    " . $name . "\n";
$emailBody .= "Email:   " . $email . "\n";
$emailBody .= "Subject: " . $subject . "\n";
$emailBody .= "─────────────────────────────────\n\n";
$emailBody .= "Message:\n" . $message . "\n\n";
$emailBody .= "─────────────────────────────────\n";
$emailBody .= "Sent: " . date('Y-m-d H:i:s T') . "\n";
$emailBody .= "IP:   " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$headers  = 'From: noreply@marcosastudillo.com' . "\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";
$headers .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";

// ─────────────────────────────────────────────────────────────
// Send Email
// ─────────────────────────────────────────────────────────────
$sent = mail($recipientEmail, $emailSubject, $emailBody, $headers);

if ($sent) {
    $_SESSION['contact_submissions'][] = $now;
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message. Please try again or email directly.']);
}
