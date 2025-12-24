document.addEventListener('DOMContentLoaded', function() {
    const discordBtn = document.getElementById('discordBtn');
    const telegramBtn = document.getElementById('telegramBtn');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalActionLink = document.getElementById('modalActionLink');
    const modalSecondaryBtn = document.getElementById('modalSecondaryBtn');
    const orderForm = document.getElementById('orderForm');

    const discordInviteLink = 'https://discord.gg/pBERcgebqx';
    const telegramInviteLink = 'https://t.me/UE_Studio90';

    if (discordBtn) {
        discordBtn.addEventListener('click', function() {
            showModal(
                'Join Our Discord',
                'Click the button below to join our Discord server and connect with our team. Discord is our primary communication platform.',
                discordInviteLink,
                'Join Discord',
                'Use Telegram Instead'
            );
        });
    }

    if (telegramBtn) {
        telegramBtn.addEventListener('click', function() {
            showModal(
                'Join Our Telegram',
                'Click the button below to join our Telegram channel. This is a great alternative if you don\'t use Discord.',
                telegramInviteLink,
                'Join Telegram',
                'Use Discord Instead'
            );
        });
    }

 function showModal(title, message, actionLink, actionText, secondaryText) {
   modalTitle.textContent = title;
   modalMessage.textContent = message;
   modalActionLink.textContent = actionText;
   modalActionLink.href = actionLink;
   modalSecondaryBtn.textContent = secondaryText;

   if (secondaryText === 'Close') {
     modalSecondaryBtn.onclick = function () {
       contactModal.style.display = 'none';
     };
   }
   else if (secondaryText === 'Use Discord Instead') {
     modalSecondaryBtn.onclick = function () {
       showModal(
         'Join Our Discord',
         'Click the button below to join our Discord server and connect with our team.',
          discordInviteLink,
         'Join Discord',
         'Use Telegram Instead'
       );
     };
   }
   else {
     modalSecondaryBtn.onclick = function () {
       showModal(
         'Join Our Telegram',
         'Click the button below to join our Telegram channel.',
         telegramInviteLink,
         'Join Telegram',
         'Use Discord Instead'
       );
     };
   }

  contactModal.style.display = 'flex';
}

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            contactModal.style.display = 'none';
        });
    }
    window.addEventListener('click', function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });
    if (orderForm) {
  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      contact: document.getElementById('contact').value,
      requestType: document.getElementById('requestType').value,
      description: document.getElementById('description').value,
      budget: document.getElementById('budget').value || 'Not specified'
    };

    fetch("https://discord.com/api/webhooks/1453320373922693182/jZFdJFYpxqIaJ5tMAotusHWEwbiegmSIYH0DDfK-D8cCzxLqdVMPNaX6iT8r1ML3_boh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "UE Studio",
        avatar_url: "https://i.imgur.com/TJ6BthE.jpeg",
        embeds: [{
          title: "🧾 New Order Received",
          color: 16766720,
          fields: [
            { name: "👤 Name", value: formData.name, inline: true },
            { name: "📞 Contact", value: formData.contact, inline: true },
            { name: "🛠️ Type", value: formData.requestType, inline: false },
            { name: "💬 Description", value: formData.description, inline: false },
            { name: "💰 Budget", value: formData.budget, inline: true }
          ],
          footer: {
            text: "UE Studio • Order System"
          },
          timestamp: new Date().toISOString()
        }]
      })
    })
    .then(() => {
      showModal(
        'Order Sent Successfully!',
        `Thank you, ${formData.name}! Your order has been sent to our Discord team. Please join Discord to continue.`,
        discordInviteLink,
        'Join Discord',
        'Close'
      );

      orderForm.reset();
    })
    .catch(() => {
      alert("Failed to send order. Please join Discord directly.");
    });
  });
}


    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.maxHeight && answer.style.maxHeight !== '0px';

            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.maxHeight = null;
                ans.style.opacity = '0.7';
                ans.style.marginTop = '0';
            });

            document.querySelectorAll('.faq-question i').forEach(icon => {
                if (icon) icon.className = 'fas fa-chevron-right';
            });

            if (!isVisible) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
                answer.style.marginTop = '15px';

                const icon = this.querySelector('i');
                if (icon) icon.className = 'fas fa-chevron-down';
            }
        });

        if (!this.querySelector('i')) {
            this.innerHTML += '<i class="fas fa-chevron-right" style="margin-left: auto; font-size: 0.9rem;"></i>';
        }
    });

    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease';
        answer.style.opacity = '0.7';
    });
});