import React from 'react';

import './ContentBody.css';

const collapseToggle = (cardId, cardGroup, content, collapseTitle, contentTxt, collapseTitleText, textData) => {

  const card = document.getElementById(cardId);
  const cardLS = Array.from(document.getElementsByClassName(cardGroup));
  const collapsibleContent = document.getElementById(content);
  const cc_title = document.getElementById(collapseTitle);
  const cc_txt = document.getElementById(contentTxt);
  const scroll = document.getElementsByClassName(content);

  cardLS.map((item) => {
    if (item.id !== cardId && item.classList.contains('collapse-active')) {
      item.classList.toggle('collapse-active');
      if (collapsibleContent.classList.contains('active')) {
        collapsibleContent.classList.toggle('active');
      }
    }
    return item;
  });

  cc_title.innerHTML = collapseTitleText;
  cc_txt.innerHTML = textData;
  card.classList.toggle('collapse-active');
  collapsibleContent.classList.toggle('active');
  scroll[0].scrollIntoView({ behavior: 'smooth', block: 'end' });

};

function ContentBody(props) {
  return (
    <div className='career-body'>
      {
        props.bodyData.map((item, idx) => (
          item.bgImg ? (
            <div key={item.id} id={`scrollIntoView-${item.id}`} className='imageStore' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.imgData.imgSrc})` }}>
              <p>{item.id}</p>
              <div className={`imageStore-context`}>
                <section className={`is-c-title`}>
                  <span>{item.desc.title}</span>
                </section>
                <section className={`is-c-content`}>
                  <span>{item.desc.content}</span>
                </section>
                <section className={`is-c-readmore`}>
                  <div className='sub-content'>
                    {
                      item.subData.map((subItem, idx) => (
                        <div className={`sub-content-item sub-content-item-${subItem.id}`}>
                          <h3 className={`align-header-${item.id}-${subItem.id}-${idx}`} >{subItem.title}</h3>
                          <p>{subItem.content} <a className='subcontent-linksList' href='javascrip:void(0);'>{subItem.pby?subItem.pby:''}</a></p>
                          <ul className={`sub-content-item-list sub-content-item-list-${item.id}-${subItem.id}-${idx}`}>
                            {
                              subItem.linkList.map((linkItem) => (
                                <li className={`sub-content-item-list-item align-${item.id}-${subItem.id}-${idx}`}><a className='subcontent-linksList' href='javascript:void(0);'>{linkItem.title}</a></li>
                              ))
                            }
                          </ul>
                        </div>
                      ))
                    }
                  </div>
                </section>
              </div>
            </div>
          ) : (
            <div>
              <div id={`scrollIntoView-${item.id}`} className={`c-body-grid ${item.left2right ? 'c-b-grid-flex-0' : 'c-b-grid-flex-1'} ${item.class}`}>
                <figure className={`career-figure c-figure-${item.id}`}>
                  <img alt={item.imgData.imgAlt} src={item.imgData.imgSrc} />
                </figure>
                <div className={`c-b-grid-content c-desc-${item.id}`}>
                  <h2>{item.desc.title}</h2>
                  <p>{item.desc.content}</p>
                </div>
              </div>
              <div className='flex-card-container'>
                {
                  item.subData.map((subItem) => (
                    <div tabindex="0" id={`card-id-${item.id}-${subItem.id}`} className={`card card-group-${item.id}`} onClick={() => collapseToggle(`card-id-${item.id}-${subItem.id}`, `card-group-${item.id}`, `collapsibleContent-${item.id}`, `collapsibleContentTitle-${item.id}`, `collapsibleContent-txt-${item.id}`, subItem.title, subItem.content)}>
                      <div className='card-container'>
                        <div className='card-icon'><img src={subItem.icon} alt={subItem.alt} /></div>
                        <div className='card-icon-context'>
                          <h4><b>{subItem.title}</b></h4>
                          <p>{subItem.subTitle}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div id={`collapsibleContent-${item.id}`} className={`collapsibleContent`}>
                <h2 id={`collapsibleContentTitle-${item.id}`}>subtitle</h2>
                <p id={`collapsibleContent-txt-${item.id}`} className='collapsibleContent-txt'>This is the content that will be collapsed.</p>
              </div>
              <div className={`collapsibleContent-${item.id}`}></div>
            </div>
          )
        ))
      }
    </div>
  );
}

export default ContentBody;