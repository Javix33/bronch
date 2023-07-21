<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recopilar datos del formulario
    $name = isset($_POST["name"]) ? $_POST["name"] : "";
    $email = $_POST["email"];
    $phone = isset($_POST["phone"]) ? $_POST["phone"] : "";
    $visit_date = isset($_POST["visit_date"]) ? $_POST["visit_date"] : "";
    $comments = isset($_POST["comments"]) ? $_POST["comments"] : "";

    // Validar campos obligatorios
    if (empty($email)) {
        die("Error: El correo electrónico es un campo obligatorio.");
    }

    // Validar correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Error: El correo electrónico no es válido.");
    }

    // Construir el mensaje de correo electrónico
    $to = "javix33@hotmail.com"; // Reemplaza con la dirección de correo del destinatario
    $subject = "Mensaje de formulario de contacto";

    $message = "Nombre: " . $name . "\n";
    $message .= "Correo electrónico: " . $email . "\n";
    $message .= "Teléfono: " . $phone . "\n";
    $message .= "Fecha de la visita: " . $visit_date . "\n";
    $message .= "Comentarios o dudas:\n" . $comments;

    // Enviar el correo electrónico
    if (mail($to, $subject, $message)) {
        // Redirigir a la página de confirmación
        header("Location: confirmation.html");
        exit();
    } else {
        die("Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.");
    }
}
?>