const params = new URLSearchParams(window.location.search);
const id = params.get('id') || 'DZ01-001';

const products = {
  'DZ01-001': { code: 'DZ01-001', series: 'DEAD AURA', name: 'PURSUIT', price: 1800, units: 15 },
  'DZ01-002': { code: 'DZ01-002', series: 'JESUS × MISTAKE', name: 'ADVICE', price: 1800, units: 12 },
  'DZ01-003': { code: 'DZ01-003', series: 'PERCEPTION', name: 'MIRROR', price: 1800, units: 9 },
};

const p = products[id] || products['DZ01-001'];

document.getElementById('p-code').textContent = p.code;
document.getElementById('img-code').textContent = p.code;
document.getElementById('p-series').textContent = p.series;
document.getElementById('p-name').textContent = p.name;
document.getElementById('p-price').textContent = `₹${p.price.toLocaleString('en-IN')}`;
document.getElementById('units-left').textContent = p.units;
document.getElementById('units-bar').style.width = `${(p.units / 15) * 100}%`;
document.title = `DROP ZERO — ${p.name}`;

let selectedSize = 'L';

document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = btn.dataset.size;
  });
});

document.getElementById('secure-btn').addEventListener('click', () => {
  if (!selectedSize) return;

  // Razorpay integration point
  // Replace KEY_ID with your actual Razorpay key
  // Uncomment and configure when ready to go live

  /*
  const options = {
    key: 'YOUR_RAZORPAY_KEY_ID',
    amount: p.price * 100,
    currency: 'INR',
    name: 'DROP ZERO',
    description: `${p.code} — ${p.name} / ${selectedSize}`,
    image: '/assets/dz-logo.png',
    handler: function(response) {
      sessionStorage.setItem('dz_order', JSON.stringify({
        ref: response.razorpay_payment_id,
        designation: `${p.code} — ${p.name}`,
        size: selectedSize
      }));
      window.location.href = 'confirm.html';
    },
    prefill: {},
    theme: { color: '#0a0a0a' },
    modal: { backdropclose: false }
  };
  const rzp = new Razorpay(options);
  rzp.open();
  */

  // TEMP: direct to confirm for testing
  sessionStorage.setItem('dz_order', JSON.stringify({
    ref: 'DZ01-' + Math.floor(Math.random() * 90000 + 10000),
    designation: `${p.code} — ${p.name}`,
    size: selectedSize
  }));
  window.location.href = 'confirm.html';
});
