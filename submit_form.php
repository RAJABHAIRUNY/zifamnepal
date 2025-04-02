





<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $place = $_POST['place'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
    
        // Email subject and body
        $subject = "New Message from $name";
        $body = "You have received a new message:\n\n";
        $body .= "Name: $name\n";
        $body .= "Place: $place\n";
        $body .= "Phone Number: $phone\n";
        $body .= "Message:\n$message\n";
    
        // Email headers
        $headers = "From: $name <$name@example.com>\r\n"; // Replace with your email address
        $headers .= "Reply-To: $name <$name@example.com>\r\n"; // Replace with your email address
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
        // The recipient email address
        $to = "aveshakela4@gmail.com"; // Replace with the recipient's email
    
        // Sending the email
        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "There was an error sending your message.";
        }
    }
    ?>
    


