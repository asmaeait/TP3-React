// Page Contact - Asma Ait El Mahjoub
import { useState } from 'react';

function Contact() {
  const [envoye, setEnvoye] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  function onInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (formData.nom && formData.email && formData.message) {
      setEnvoye(true);
    } else {
      alert(' Veuillez remplir tous les champs !');
    }
  }

  return (
    <div className="card">
      <h2> Contactez-moi</h2>
      {envoye ? (
        <div>
          <p> Message envoyé avec succès !</p>
          <p>Merci <strong>{formData.nom}</strong>, je vous répondrai bientôt.</p>
          <button onClick={() => setEnvoye(false)}>Envoyer un autre message</button>
        </div>
      ) : (
        <form onSubmit={onFormSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Nom :</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={onInputChange}
              placeholder="Votre nom..."
              style={{ display: 'block', width: '100%', marginTop: '4px' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              placeholder="Votre email..."
              style={{ display: 'block', width: '100%', marginTop: '4px' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Message :</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={onInputChange}
              placeholder="Votre message..."
              rows="4"
              style={{ display: 'block', width: '100%', marginTop: '4px', borderRadius: '8px', padding: '8px', border: '1px solid #ddd' }}
            />
          </div>
          <button type="submit">Envoyer </button>
        </form>
      )}
    </div>
  );
}

export default Contact;