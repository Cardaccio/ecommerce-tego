exports.processErrors = (error) => {
    const errors = [];
    for (var cause of error.cause) {
        // https://www.mercadopago.com.uy/developers/en/reference/payments/_payments/post
        switch (cause.code) {
            case 2000:
                errors.push('Pago no encontrado.');
                break;
            case 4:
                errors.push('Acceso no autorizado a la API.');
                break;
            case 3002:
                errors.push('Acceso no autorizado a la API.');
                break;
            case 1:
                errors.push('Parámetros incorrectos.');
                break;
            case 3:
                errors.push('El token usado debe ser de prueba.');
                break;
            case 5:
                errors.push('Se requiere el token de acceso para continuar.');
                break;
            case 23:
                errors.push('La fecha de vencimiento no tiene un formato válido.');
                break;
            case 1000:
                errors.push('El número de columnas excede el límite.');
                break;
            case 1001:
                errors.push('La fecha de vencimiento no tiene un formato válido.');
                break;
            case 2001:
                errors.push('Pago ya realizado hace menos de un minuto.');
                break;
            case 2004:
                errors.push('Error al llamar a la API.');
                break;
            case 2002:
                errors.push('Cliente no encontrado.');
                break;
            case 2006:
                errors.push('Token de la tarjeta no encontrado.');
                break;
            case 2006:
                errors.push('Error de conexión con la API.');
                break;
            case 2009:
                errors.push('El emisor de la tarjeta es requerido.');
                break;
            case 2060:
                errors.push('El emisor no puede ser igual al receptor.');
                break;
            case 3000:
                errors.push('Indique el nombre que aparece en la tarjeta.');
                break;
            case 3001:
                errors.push('Indique el emisor de la tarjeta.');
                break;
            case 3003:
                errors.push('Token de tarjeta inválido.');
                break;
            case 3004:
                errors.push('ID del sitio no identificado.');
                break;
            case 3005:
                errors.push('Acción no válida.');
                break;
            case 3006:
                errors.push('Token de tarjeta inválido.');
                break;
            case 3007:
                errors.push('ID de cliente requerido.');
                break;
            case 3008:
                errors.push('Token de tarjeta no encontrado.');
                break;
            case 3009:
                errors.push('Cliente no autorizado.');
                break;
            case 3010:
                errors.push('La tarjeta no está en la lista blanca.');
                break;
            case 3011:
                errors.push('ID del medio de pago no encontrado.');
                break;
            case 3012:
                errors.push('El largo del código de seguridad es inválido.');
                break;
            case 3013:
                errors.push('El código de seguridad es requerido.');
                break;
            case 3014:
                errors.push('Medio de pago inválido.');
                break;
            case 3015:
                errors.push('Largo de número de tarjeta inválido.');
                break;
            case 3016:
                errors.push('Número de tarjeta inválido.');
                break;
            case 3017:
                errors.push('El ID de tarjeta es requerido.');
                break;
            case 3018:
                errors.push('El mes de vencimiento es requerido.');
                break;
            case 3019:
                errors.push('El año de vencimiento es requerido.');
                break;
            case 3020:
                errors.push('El nombre de la tarjeta es requerido.');
                break;
            case 3021:
                errors.push('El número de documento es requerido.');
                break;
            case 3022:
                errors.push('El tipo de documento es requerido.');
                break;
            case 3023:
                errors.push('El tipo de documento es requerido.');
                break;
            case 3024:
                errors.push('Devolución parcial no es posible para esta transacción.');
                break;
            case 3025:
                errors.push('Código de autorización inválido.');
                break;
            case 3026:
                errors.push('ID de tarjeta inválido para el medio de pago seleccionado.');
                break;
            case 3027:
                errors.push('El tipo de medio de pago es inválido.');
                break;
            case 3028:
                errors.push('El medio de pago es inválido.');
                break;
            case 3029:
                errors.push('El mes de vencimiento es inválido.');
                break;
            case 3030:
                errors.push('El año de vencimiento es inválido.');
                break;
            case 4000:
                errors.push('La tarjeta es requerida.');
                break;
            case 4001:
                errors.push('El ID del medio de pago es requerido.');
                break;
            case 4002:
                errors.push('El valor de la transacción es requerido.');
                break;
            case 4003:
                errors.push('El valor de la transacción debe ser numérico.');
                break;
            case 4004:
                errors.push('La cantidad de cuotas es requerida.');
                break;
            case 4005:
                errors.push('La cantidad de cuotas debe ser numérica.');
                break;
            case 4006:
                errors.push('El pagador no es válido.');
                break;
            case 4007:
                errors.push('El ID del sitio es requerido.');
                break;
            case 4012:
                errors.push('El ID del pagador es requerido.');
                break;
            case 4013:
                errors.push('El tipo del pagador es requerido.');
                break;
            case 4015:
                errors.push('El ID de la referencia de pago es requerido.');
                break;
            case 4016:
                errors.push('El ID de la referencia de pago debe ser numérico.');
                break;
            case 4017:
                errors.push('El status es requerido.');
                break;
            case 4018:
                errors.push('El ID del pago es requerido.');
                break;
            case 4019:
                errors.push('El ID del pago debe ser numérico.');
                break;
            case 4020:
                errors.push('La URL de la notificación debe es inválida.');
                break;
            case 4021:
                errors.push('La URL de la notificación debe ser menor a 500 caractéres.');
                break;
            case 4022:
                errors.push('El campo metadata debe ser JSON válido.');
                break;
            case 4023:
                errors.push('El valor de la transacción es requerido.');
                break;
            case 4024:
                errors.push('El valor de la transacción debe ser numérico.');
                break;
            case 4025:
                errors.push('El ID de la devolución es requerido.');
                break;
            case 4026:
                errors.push('Valor de cupón inválido.');
                break;
            case 4027:
                errors.push('El ID de la campaña debe ser numérico.');
                break;
            case 4028:
                errors.push('El valor del cupón debe ser numérico.');
                break;
            case 4029:
                errors.push('Tipo de pagador inválido.');
                break;
            case 4037:
                errors.push('Valor de transacción inválido.');
                break;
            case 4038:
                errors.push('La tasa de la aplicación no puede ser superior al valor de la transacción.');
                break;
            case 4039:
                errors.push('La tasa de la aplicación no puede ser negativa.');
                break;
            case 4050:
                errors.push('El email del pagador debe ser válido.');
                break;
            case 4051:
                errors.push('El email del pagador debe ser menor a 254 caractéres.');
                break;
            case 7523:
                errors.push('Fecha de vencimiento inválida.');
                break;
            case 2131:
                errors.push('Error al inferir el medio de pago.');
                break;
            default:
                errors.push('Error procesando el pago, intente nuevamente');
        }
    }

    return errors;
}

exports.processResponse = (status_detail) => {
    let message = '';
    switch (status_detail) {
        case 'accredited':
            message = '¡Listo! Se acreditó tu pago.';
            break;
        case 'pending_contingency':
            message = 'Estamos procesando tu pago. No te preocupes, menos de 2 días hábiles te avisaremos por e-mail si se acreditó.';
            break;
        case 'pending_review_manual':
            message = 'Estamos procesando tu pago. No te preocupes, menos de 2 días hábiles te avisaremos por e-mail si se acreditó o si necesitamos más información.';
            break;
        case 'cc_rejected_bad_filled_card_number':
            message = 'Error procesando el pago, verifique el número de tarjeta';
            break;
        case 'cc_rejected_bad_filled_date':
            message = 'Error procesando el pago, verifique la fecha de vencimiento';
            break;
        case 'cc_rejected_bad_filled_other':
            message = 'Error procesando el pago, verifique los datos ingresados';
            break;
        case 'cc_rejected_bad_filled_security_code':
            message = 'Error procesando el pago, verifique el código de seguridad';
            break;
        case 'cc_rejected_blacklist':
            message = 'Error procesando el pago, su pago no puede ser procesado';
            break;
        case 'cc_rejected_call_for_authorize':
            message = 'Error procesando el pago, debe autorizar el monto con su proveedor de tarjeta';
            break;
        case 'cc_rejected_card_disabled':
            message = 'Error procesando el pago, llame a su proveedor de tarjeta para activarla';
            break;
        case 'cc_rejected_card_error':
            message = 'Error procesando el pago, su pago no pudo ser procesado';
            break;
        case 'cc_rejected_duplicated_payment':
            message = 'Error procesando el pago, ya fue realizado un pago por este monto';
            break;
        case 'cc_rejected_high_risk':
            message = 'Error procesando el pago, su pago fue rechazado';
            break;
        case 'cc_rejected_insufficient_amount':
            message = 'Error procesando el pago, fondos insuficientes';
            break;
        case 'cc_rejected_invalid_installments':
            message = 'Error procesando el pago, su tarjeta no puede procesar pagos en las cuotas seleccionadas';
            break;
        case 'cc_rejected_max_attempts':
            message = 'Error procesando el pago, se alcanzó el límite de intentos con esta tarjeta';
            break;
        case 'cc_rejected_other_reason':
            message = 'Error procesando el pago, la tarjeta no pudo procesar el pago';
            break;
        default:
            message = 'Error procesando el pago';
            break;
    }
    return message;
}

