import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [

  {
    title: ' Lorem ipsum dolor sit amet',
    description: (
      <>
        <img src= "https://kakahi.ru/upload/post/big/e4f7ec2836729668cdf34a1da3459a8b1513879310.jpg" alt="loh"></img>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nunc nisl. Maecenas bibendum ut metus eu rutrum. Aliquam ultricies et lorem vel lacinia. Sed id erat quis nisl iaculis.
      </>
    ),
  },

  {
    title: ' Lorem ipsum dolor sit amet',
    description: (
      <>
        <img src= "https://kakahi.ru/upload/post/big/e4f7ec2836729668cdf34a1da3459a8b1513879310.jpg" alt="loh"></img>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nunc nisl. Maecenas bibendum ut metus eu rutrum. Aliquam ultricies et lorem vel lacinia. Sed id erat quis nisl iaculis.
      </>
    ),
  },
  

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


function Discord(){
  return(
    <iframe src="https://discord.com/widget?id=1078027359032188958&theme=dark"
     width="425" height="500" allowtransparency="true" frameborder=""
     sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>


  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" align="center">
        <div className="row">
          <Discord></Discord>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          
        </div> 
      </div>
      
    </section>
    
  );
}
