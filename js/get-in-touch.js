$('#send-message').click(function(){
			if($('#contact-name').val()==""){
				$('#contact-name-error').html("<p>Please enter your full name</p>");
			return false;
			}
			else
			{
				var contactName = $('#contact-name').val();
				$('#contact-name-error').html("");
			}
			if($('#contact-email').val()==""){
				$('#contact-email-error').html("<p>Please enter your email address</p>");
				return false;
			}
			else
			{
				var contactEmail = $('#contact-email').val();
				$('#contact-email-error').html("");
			}
			if($('#contact-phone').val()==""){
				var contactPhone = "N/A";
			}
			else
			{
				var contactPhone = $('#contact-phone').val();
				$('#contact-phone-error').html("");
			}
			if($('#contact-message').val()==""){
				$('#contact-message-error').html("<p>Please enter your message</p>");
				return false;
			}
			else
			{
				var contactMessage = $('#contact-message').val();
				$('#contact-message-error').html("");
			}
			$('#contact-success').html("Thanks for getting in touch! I'll get back to you as soon as possible.");
			jQuery.post(
				"site-res/php/ajax-process-get-in-touch.php", 
				{	contact_name:contactName,
					contact_email:contactEmail,
					contact_phone:contactPhone,
					contact_message:contactMessage
				},
				function(data, textStatus){
					if(data){
						$('#contact-success').html("Thank you for getting in touch! I'll get back to you as soon as possible.");
						$('#contact-failure').html("");
					}else{
						$('#contact-failure').html("So sorry! An error occurred while we were trying to send your message.");
						$('#contact-success').html("");
					}
				}
			);
		});
