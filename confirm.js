const order = JSON.parse(sessionStorage.getItem('dz_order') || '{}');

if (order.ref) {
  document.getElementById('order-ref').textContent = order.ref;
  document.getElementById('confirm-designation').textContent = order.designation || '—';
  document.getElementById('confirm-size').textContent = order.size || '—';
} else {
  document.getElementById('order-ref').textContent = 'NOT FOUND';
}
