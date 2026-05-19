// Life Ledger - FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  });
});
