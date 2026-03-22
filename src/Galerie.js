// Galerie d'images - Asma Ait El Mahjoub
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

function Galerie() {
  const images = [
    { id: 1, src: img1, legende: 'Photo 1' },
    { id: 2, src: img2, legende: 'Photo 2' },
    { id: 3, src: img3, legende: 'Photo 3' },
  ];

  return (
    <div>
      <h3> Ma Galerie</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.id} style={{ textAlign: 'center' }}>
            <img
              src={image.src}
              alt={image.legende}
              width="150"
              style={{ borderRadius: '8px' }}
            />
            <p>{image.legende}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galerie;