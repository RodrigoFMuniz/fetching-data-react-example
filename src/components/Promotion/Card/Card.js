import React from 'react'
import './Card.css'

const PromotionCard = ({promo})=>{
  return (
    <div className='promo-card' style={{
      maxWidth:800,
      margin:'30px auto'
    }}>
      <img className='promo-card__img' src={promo.imageUrl} alt='alt'/>
      <div className='promo-card__info'>
        <h1 className='promo-card__title'>{promo.title}</h1>
        <span className='promo-card__price'>R$ {promo.price}</span>
        <footer className='promo-card__footer'>
          {promo.comments.length > 0 && (
            <div className='promo-card__comment'>"{promo.comments[0].comment}"</div>
          )}
          <div className='promo-card__comments-count'>
            {promo.comments.length}{' '}
            {promo.comments.length>1 ? 'Comentários': 'Comentário'}
          </div>
          <a className='promo-card__link' href={promo.url} target='_blank' rel='noreferrer'>Ir para o site</a>
        </footer>
      </div>
    </div>
  )
}

export default PromotionCard