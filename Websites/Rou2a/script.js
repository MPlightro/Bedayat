// Keep all menu names, prices, one-liners, and photo cues together for easy updates.
const menuData = {
  bestLabel: { ar: 'الأكثر طلبًا', en: 'Most ordered' },
  socialProof: '4.2',
  sandwiches: [
    { id: 'hawawshi', ar: 'حواوشي', en: 'Hawawshi', price: 75, noteAr: 'عيش محشي لحمة مفرومة متبلة ومتسوي على الجريل.', noteEn: 'Bread stuffed with seasoned minced meat and grilled.', photo: 'Hawawshi.jpg', best: true, color: 'red' },
    { id: 'kebda', ar: 'كبدة', en: 'Kebda', price: 65, noteAr: 'كبدة إسكندراني متتبلة بتوابل شرقي وبتتقدم سخنة.', noteEn: 'Alexandrian liver marinated with oriental spices and served hot.', photo: 'Liver-kebda.jpg', color: 'yellow' },
    { id: 'sogok-sharqi', ar: 'سجق شرقي', en: 'Sogok Sharqi', price: 65, noteAr: 'سجق بلدي متشوح بتتبيلة شرقي حراقة.', noteEn: 'Baladi sausage cooked with spicy seasonings in the oriental style.', photo: 'sogo2.jpg', color: 'blue' },
    { id: 'sogok-eskandarani', ar: 'سجق إسكندراني', en: 'Sogok Eskandarani', price: 65, noteAr: 'سجق بفلفل ألوان وطماطم بصوص إسكندراني.', noteEn: 'Sausage cooked with bell peppers and tomatoes in Alexandrian sauce.', photo: 'Sogo2-eskandarani.jpg', color: 'green' },
    { id: 'kofta', ar: 'كفتة', en: 'Kofta', price: 80, noteAr: 'كفتة مشوية على الفحم بتتبيلة شرقي.', noteEn: 'Charcoal-grilled kofta with an oriental marinade.', photo: 'kofta.jpg', color: 'red' },
    { id: 'sakalans', ar: 'سكلانس', en: 'Sakalans', price: 55, noteAr: 'خليط حلاوة وقشطة وعسل… حكاية.', noteEn: 'A mixture of Halawa, Qeshta, and honey.', photo: 'Sakalans.jpg', color: 'yellow' }
  ],
  boxes: [
    { ar: 'علبة ٤ حواوشي', en: '4 Hawawshi', price: 285, noteAr: 'اللمة بتحلى بيها.', noteEn: 'The gathering has a favourite.', photo: '4-hawawshi.jpg', best: true },
    { ar: 'علبة ٤ كفتة', en: '4 Kofta', price: 300, noteAr: 'أربعة.. وكلهم للّمة.', noteEn: 'Four to share, if you feel like it.', photo: 'Kofta-box.jpg' },
    { ar: '٢ كفتة + ٢ حواوشي', en: '2 Kofta + 2 Hawawshi', price: 295, noteAr: 'أحلى قسمة.', noteEn: 'The best of both worlds.', photo: '2-kofta+2-hawawshi.jpg' },
    { ar: 'نص دستة (كبدة / سجق)', en: 'Half dozen (Kebda / Sogok)', price: 375, noteAr: 'نص دستة مش نص لمة.', noteEn: 'Half a dozen, all the flavour.', photo: 'box-half-dozen.jpg' },
    { ar: 'دستة (كبدة / سجق)', en: 'A dozen (Kebda / Sogok)', price: 720, noteAr: 'اللمة الكبيرة ليها حساب.', noteEn: 'A big gathering deserves a big spread.', photo: 'box-dozen.jpg' }
  ],
  sides: [
    { ar: 'بطاطس مقلية', en: 'French fries', price: 40, icon: '✳' },
    { ar: 'سلطة', en: 'Salad', price: 20, icon: '✿' },
    { ar: 'مخلل', en: 'Pickles', price: 20, icon: '❋' },
    { ar: 'حاجة ساقعة', en: 'Cold drink', price: 25, icon: '◈' },
    { ar: 'مياه', en: 'Water', price: 15, icon: '⌁' }
  ],
  photos: ['Hawawshi.jpg', 'Liver-kebda.jpg', 'sogo2.jpg', 'kofta.jpg']
};

const formatPrice = price => `<bdi>${price}</bdi><span class="currency">جنيه</span>`;
function sandwichCard(item) {
  return `<article class="sandwich-card ${item.color}${item.best ? ' best-seller' : ''}">
    <div class="card-photo photo-placeholder">${item.photo ? `<img class="placeholder-image" src="assets/photos/${item.photo}" alt="${item.en}">` : ''}${item.best ? `<span class="best-badge"><span data-ar="${menuData.bestLabel.ar}" data-en="${menuData.bestLabel.en}">${menuData.bestLabel.ar}</span> ★</span>` : ''}</div>
    <div class="card-copy"><div class="card-title"><h3 data-ar="${item.ar}" data-en="${item.en}">${item.ar}</h3><span class="price">${formatPrice(item.price)}</span></div><p data-ar="${item.noteAr}" data-en="${item.noteEn}">${item.noteAr}</p></div>
  </article>`;
}
document.querySelector('#sandwich-grid').innerHTML = menuData.sandwiches.map(sandwichCard).join('');
document.querySelector('[data-rating]').textContent = menuData.socialProof;
document.querySelector('#boxes-grid').innerHTML = menuData.boxes.map(item => `<article class="box-card ${item.best ? 'box-best' : ''}"><span class="box-photo photo-placeholder">${item.photo ? `<img class="placeholder-image" src="assets/photos/${item.photo}" alt="${item.en} group box">` : ''}</span><span class="box-name" data-ar="${item.ar}" data-en="${item.en}">${item.ar}</span><span class="box-note" data-ar="${item.noteAr}" data-en="${item.noteEn}">${item.noteAr}</span><span class="box-price">${formatPrice(item.price)}</span>${item.best ? `<span class="box-best-label" data-ar="${menuData.bestLabel.ar} ★" data-en="${menuData.bestLabel.en} ★">${menuData.bestLabel.ar} ★</span>` : ''}</article>`).join('');
document.querySelector('#sides-grid').innerHTML = menuData.sides.map((item, i) => `<article class="side-item" style="--side-index:${i}"><span class="side-icon" aria-hidden="true">${item.icon}</span><span data-ar="${item.ar}" data-en="${item.en}">${item.ar}</span><b>${formatPrice(item.price)}</b></article>`).join('');
document.querySelector('#insta-grid').innerHTML = menuData.photos.map((photo, i) => `<a class="insta-photo insta-${i + 1} photo-placeholder" href="https://www.instagram.com/yallarou2a/" target="_blank" rel="noopener noreferrer" data-instagram aria-label="Rou2a Instagram photo ${i + 1}"><img class="placeholder-image" src="assets/photos/${photo}" alt="Rou2a food photo ${i + 1}"><b>↗</b></a>`).join('');
// Rabbit is a non-clickable badge until its direct order link is available.

let language = 'ar';
const langToggle = document.querySelector('.lang-toggle');
function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', language === 'en');
  document.querySelectorAll('[data-en]').forEach(node => {
    if (node.dataset.ar === undefined) node.dataset.ar = node.textContent.trim();
    node.textContent = node.dataset[language];
  });
  langToggle.innerHTML = language === 'ar' ? 'EN <span>↗</span>' : 'عربي <span>↗</span>';
  langToggle.setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التحويل للعربية');
  document.querySelectorAll('[data-talabat]').forEach(node => { node.href = language === 'ar' ? 'https://www.talabat.com/ar/egypt/rou2a' : 'https://www.talabat.com/egypt/rou2a'; });
  document.querySelectorAll('[data-ar][data-en]').forEach(node => { node.textContent = node.dataset[language]; });
}
langToggle.addEventListener('click', () => setLanguage(language === 'ar' ? 'en' : 'ar'));
