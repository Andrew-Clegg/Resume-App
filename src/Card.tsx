import React from 'react';
import { useState } from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  desc: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, desc, imageUrl }) => {
    const [isOpen, setIsOpen] = useState(false); // hidden by default
    return (
    <div style={styles.card} onClick={() => setIsOpen(!isOpen)}>
    <p className='text-medium font-semibold'>{title}</p>

      {isOpen && (
        <div>
          {imageUrl && <img src={imageUrl} alt={title} style={styles.image} />}
          <h3 style={styles.title}>{subtitle}</h3>
          <p style={styles.description}>{desc}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    margin: '10px',
  },
  image: {
    width: '100%',
    borderRadius: '6px',
  },
  title: {
    margin: '12px 0 6px',
    fontSize: '1.2rem',
  },
  description: {
    color: '#555',
  },
} as const;

export default Card;