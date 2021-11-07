import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ErrorPage = styled.div`
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: white;
    color: black;
    font-family: arial, sans-serif;
    overflow: hidden;
  }

  .content {
    position: relative;
    width: 600px;
    max-width: 100%;
    margin: 20px;
    background: white;
    padding: 60px 40px;
    text-align: center;
    box-shadow: -10px 10px 67px -12px rgba(0, 0, 0, 0.2);
    opacity: 0;
    animation: apparition 0.8s 1.2s cubic-bezier(0.39, 0.575, 0.28, 0.995)
      forwards;
  }
  .content p {
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 0.6rem;
    letter-spacing: 0.1rem;
    color: #595959;
  }
  .content p:last-child {
    margin-bottom: 0;
  }
  .content button {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: 3px solid #595959;
    background: transparent;
    font-size: 1rem;
    color: #595959;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
  }

  .particle {
    position: absolute;
    display: block;
    pointer-events: none;
  }
  .particle:nth-child(1) {
    top: 39.457459926%;
    left: 65.2818991098%;
    font-size: 11px;
    filter: blur(0.02px);
    animation: 23s float2 infinite;
  }
  .particle:nth-child(2) {
    top: 40.0488400488%;
    left: 29.4406280667%;
    font-size: 19px;
    filter: blur(0.04px);
    animation: 23s floatReverse2 infinite;
  }
  .particle:nth-child(3) {
    top: 19.2771084337%;
    left: 89.3203883495%;
    font-size: 30px;
    filter: blur(0.06px);
    animation: 39s floatReverse infinite;
  }
  .particle:nth-child(4) {
    top: 90.0856793146%;
    left: 21.6322517207%;
    font-size: 17px;
    filter: blur(0.08px);
    animation: 36s float2 infinite;
  }
  .particle:nth-child(5) {
    top: 9.6735187424%;
    left: 36.0272638754%;
    font-size: 27px;
    filter: blur(0.1px);
    animation: 23s float2 infinite;
  }
  .particle:nth-child(6) {
    top: 65.0246305419%;
    left: 38.5375494071%;
    font-size: 12px;
    filter: blur(0.12px);
    animation: 30s floatReverse infinite;
  }
  .particle:nth-child(7) {
    top: 10.8374384236%;
    left: 2.9644268775%;
    font-size: 12px;
    filter: blur(0.14px);
    animation: 32s floatReverse2 infinite;
  }
  .particle:nth-child(8) {
    top: 49.8777506112%;
    left: 68.7622789784%;
    font-size: 18px;
    filter: blur(0.16px);
    animation: 22s floatReverse infinite;
  }
  .particle:nth-child(9) {
    top: 46.3054187192%;
    left: 70.1581027668%;
    font-size: 12px;
    filter: blur(0.18px);
    animation: 21s floatReverse2 infinite;
  }
  .particle:nth-child(10) {
    top: 20.5128205128%;
    left: 52.9931305201%;
    font-size: 19px;
    filter: blur(0.2px);
    animation: 22s floatReverse2 infinite;
  }
  .particle:nth-child(11) {
    top: 64.5476772616%;
    left: 9.8231827112%;
    font-size: 18px;
    filter: blur(0.22px);
    animation: 31s floatReverse infinite;
  }
  .particle:nth-child(12) {
    top: 5.8679706601%;
    left: 11.7878192534%;
    font-size: 18px;
    filter: blur(0.24px);
    animation: 33s floatReverse2 infinite;
  }
  .particle:nth-child(13) {
    top: 43.530834341%;
    left: 18.5004868549%;
    font-size: 27px;
    filter: blur(0.26px);
    animation: 38s float infinite;
  }
  .particle:nth-child(14) {
    top: 7.8431372549%;
    left: 31.4960629921%;
    font-size: 16px;
    filter: blur(0.28px);
    animation: 35s floatReverse infinite;
  }
  .particle:nth-child(15) {
    top: 32.7710843373%;
    left: 0.9708737864%;
    font-size: 30px;
    filter: blur(0.3px);
    animation: 25s floatReverse infinite;
  }
  .particle:nth-child(16) {
    top: 95.8435207824%;
    left: 80.5500982318%;
    font-size: 18px;
    filter: blur(0.32px);
    animation: 26s float2 infinite;
  }
  .particle:nth-child(17) {
    top: 6.7551266586%;
    left: 34.0136054422%;
    font-size: 29px;
    filter: blur(0.34px);
    animation: 39s float infinite;
  }
  .particle:nth-child(18) {
    top: 81.3725490196%;
    left: 31.4960629921%;
    font-size: 16px;
    filter: blur(0.36px);
    animation: 34s floatReverse infinite;
  }
  .particle:nth-child(19) {
    top: 22.4116930572%;
    left: 94.0254652302%;
    font-size: 21px;
    filter: blur(0.38px);
    animation: 33s float infinite;
  }
  .particle:nth-child(20) {
    top: 93.4809348093%;
    left: 88.8450148075%;
    font-size: 13px;
    filter: blur(0.4px);
    animation: 28s float infinite;
  }
  .particle:nth-child(21) {
    top: 23.6162361624%;
    left: 2.9615004936%;
    font-size: 13px;
    filter: blur(0.42px);
    animation: 33s floatReverse2 infinite;
  }
  .particle:nth-child(22) {
    top: 71.3253012048%;
    left: 60.1941747573%;
    font-size: 30px;
    filter: blur(0.44px);
    animation: 23s floatReverse2 infinite;
  }
  .particle:nth-child(23) {
    top: 84.3636363636%;
    left: 94.6341463415%;
    font-size: 25px;
    filter: blur(0.46px);
    animation: 22s floatReverse infinite;
  }
  .particle:nth-child(24) {
    top: 93.5960591133%;
    left: 34.5849802372%;
    font-size: 12px;
    filter: blur(0.48px);
    animation: 38s float infinite;
  }
  .particle:nth-child(25) {
    top: 95.7264957265%;
    left: 15.7016683023%;
    font-size: 19px;
    filter: blur(0.5px);
    animation: 24s floatReverse infinite;
  }
  .particle:nth-child(26) {
    top: 38.0024360536%;
    left: 54.8481880509%;
    font-size: 21px;
    filter: blur(0.52px);
    animation: 34s floatReverse infinite;
  }
  .particle:nth-child(27) {
    top: 12.6213592233%;
    left: 63.4765625%;
    font-size: 24px;
    filter: blur(0.54px);
    animation: 37s float2 infinite;
  }
  .particle:nth-child(28) {
    top: 8.8452088452%;
    left: 34.516765286%;
    font-size: 14px;
    filter: blur(0.56px);
    animation: 32s floatReverse2 infinite;
  }
  .particle:nth-child(29) {
    top: 9.840098401%;
    left: 39.4866732478%;
    font-size: 13px;
    filter: blur(0.58px);
    animation: 33s floatReverse2 infinite;
  }
  .particle:nth-child(30) {
    top: 70.5018359853%;
    left: 6.8829891839%;
    font-size: 17px;
    filter: blur(0.6px);
    animation: 39s float infinite;
  }
  .particle:nth-child(31) {
    top: 48.1927710843%;
    left: 34.9514563107%;
    font-size: 30px;
    filter: blur(0.62px);
    animation: 21s floatReverse infinite;
  }
  .particle:nth-child(32) {
    top: 85.8866103739%;
    left: 40.8163265306%;
    font-size: 29px;
    filter: blur(0.64px);
    animation: 39s float2 infinite;
  }
  .particle:nth-child(33) {
    top: 81.9512195122%;
    left: 56.862745098%;
    font-size: 20px;
    filter: blur(0.66px);
    animation: 31s floatReverse2 infinite;
  }
  .particle:nth-child(34) {
    top: 82.4539877301%;
    left: 83.7438423645%;
    font-size: 15px;
    filter: blur(0.68px);
    animation: 37s floatReverse infinite;
  }
  .particle:nth-child(35) {
    top: 71.5840386941%;
    left: 14.605647517%;
    font-size: 27px;
    filter: blur(0.7px);
    animation: 38s float infinite;
  }
  .particle:nth-child(36) {
    top: 72.4602203182%;
    left: 68.8298918387%;
    font-size: 17px;
    filter: blur(0.72px);
    animation: 21s floatReverse infinite;
  }
  .particle:nth-child(37) {
    top: 12.5452352232%;
    left: 68.0272108844%;
    font-size: 29px;
    filter: blur(0.74px);
    animation: 24s floatReverse2 infinite;
  }
  .particle:nth-child(38) {
    top: 33.4975369458%;
    left: 87.9446640316%;
    font-size: 12px;
    filter: blur(0.76px);
    animation: 39s floatReverse2 infinite;
  }
  .particle:nth-child(39) {
    top: 94.8004836759%;
    left: 82.7653359299%;
    font-size: 27px;
    filter: blur(0.78px);
    animation: 29s floatReverse2 infinite;
  }
  .particle:nth-child(40) {
    top: 48.3675937122%;
    left: 50.6329113924%;
    font-size: 27px;
    filter: blur(0.8px);
    animation: 29s float2 infinite;
  }
  .particle:nth-child(41) {
    top: 72.4602203182%;
    left: 69.8131760079%;
    font-size: 17px;
    filter: blur(0.82px);
    animation: 23s float2 infinite;
  }
  .particle:nth-child(42) {
    top: 53.5279805353%;
    left: 31.3111545988%;
    font-size: 22px;
    filter: blur(0.84px);
    animation: 30s floatReverse infinite;
  }
  .particle:nth-child(43) {
    top: 75.9124087591%;
    left: 66.5362035225%;
    font-size: 22px;
    filter: blur(0.86px);
    animation: 38s float infinite;
  }
  .particle:nth-child(44) {
    top: 18.3574879227%;
    left: 10.7003891051%;
    font-size: 28px;
    filter: blur(0.88px);
    animation: 38s floatReverse2 infinite;
  }
  .particle:nth-child(45) {
    top: 31.4110429448%;
    left: 84.7290640394%;
    font-size: 15px;
    filter: blur(0.9px);
    animation: 35s float infinite;
  }
  .particle:nth-child(46) {
    top: 83.6408364084%;
    left: 92.7936821323%;
    font-size: 13px;
    filter: blur(0.92px);
    animation: 29s float2 infinite;
  }
  .particle:nth-child(47) {
    top: 69.1839220463%;
    left: 36.2389813908%;
    font-size: 21px;
    filter: blur(0.94px);
    animation: 36s float infinite;
  }
  .particle:nth-child(48) {
    top: 24.3013365735%;
    left: 93.8416422287%;
    font-size: 23px;
    filter: blur(0.96px);
    animation: 39s floatReverse infinite;
  }
  .particle:nth-child(49) {
    top: 74.3063932449%;
    left: 94.2662779397%;
    font-size: 29px;
    filter: blur(0.98px);
    animation: 34s float infinite;
  }
  .particle:nth-child(50) {
    top: 95.4933008526%;
    left: 57.7864838394%;
    font-size: 21px;
    filter: blur(1px);
    animation: 22s floatReverse2 infinite;
  }
  .particle:nth-child(51) {
    top: 75.7687576876%;
    left: 64.1658440276%;
    font-size: 13px;
    filter: blur(1.02px);
    animation: 31s floatReverse infinite;
  }
  .particle:nth-child(52) {
    top: 53.1400966184%;
    left: 85.6031128405%;
    font-size: 28px;
    filter: blur(1.04px);
    animation: 30s float infinite;
  }
  .particle:nth-child(53) {
    top: 82.4539877301%;
    left: 0.9852216749%;
    font-size: 15px;
    filter: blur(1.06px);
    animation: 33s floatReverse2 infinite;
  }
  .particle:nth-child(54) {
    top: 88.3435582822%;
    left: 48.275862069%;
    font-size: 15px;
    filter: blur(1.08px);
    animation: 40s floatReverse2 infinite;
  }
  .particle:nth-child(55) {
    top: 98.4009840098%;
    left: 36.5251727542%;
    font-size: 13px;
    filter: blur(1.1px);
    animation: 27s float infinite;
  }
  .particle:nth-child(56) {
    top: 28.1212121212%;
    left: 43.9024390244%;
    font-size: 25px;
    filter: blur(1.12px);
    animation: 33s float infinite;
  }
  .particle:nth-child(57) {
    top: 5.8895705521%;
    left: 37.4384236453%;
    font-size: 15px;
    filter: blur(1.14px);
    animation: 23s floatReverse2 infinite;
  }
  .particle:nth-child(58) {
    top: 80%;
    left: 10.7843137255%;
    font-size: 20px;
    filter: blur(1.16px);
    animation: 38s floatReverse infinite;
  }
  .particle:nth-child(59) {
    top: 1.9393939394%;
    left: 86.8292682927%;
    font-size: 25px;
    filter: blur(1.18px);
    animation: 40s floatReverse2 infinite;
  }
  .particle:nth-child(60) {
    top: 28.1212121212%;
    left: 55.6097560976%;
    font-size: 25px;
    filter: blur(1.2px);
    animation: 39s float infinite;
  }
  .particle:nth-child(61) {
    top: 14.7601476015%;
    left: 12.8331688055%;
    font-size: 13px;
    filter: blur(1.22px);
    animation: 22s float2 infinite;
  }
  .particle:nth-child(62) {
    top: 27.2506082725%;
    left: 69.4716242661%;
    font-size: 22px;
    filter: blur(1.24px);
    animation: 34s float2 infinite;
  }
  .particle:nth-child(63) {
    top: 63.6474908201%;
    left: 61.9469026549%;
    font-size: 17px;
    filter: blur(1.26px);
    animation: 24s floatReverse infinite;
  }
  .particle:nth-child(64) {
    top: 32.2344322344%;
    left: 60.8439646712%;
    font-size: 19px;
    filter: blur(1.28px);
    animation: 35s floatReverse infinite;
  }
  .particle:nth-child(65) {
    top: 88.4568651276%;
    left: 8.7976539589%;
    font-size: 23px;
    filter: blur(1.3px);
    animation: 21s floatReverse2 infinite;
  }
  .particle:nth-child(66) {
    top: 30.3549571603%;
    left: 87.5122910521%;
    font-size: 17px;
    filter: blur(1.32px);
    animation: 29s float infinite;
  }
  .particle:nth-child(67) {
    top: 15.6670746634%;
    left: 81.6125860374%;
    font-size: 17px;
    filter: blur(1.34px);
    animation: 32s floatReverse2 infinite;
  }
  .particle:nth-child(68) {
    top: 17.7558569667%;
    left: 16.8150346192%;
    font-size: 11px;
    filter: blur(1.36px);
    animation: 28s floatReverse2 infinite;
  }
  .particle:nth-child(69) {
    top: 69.0505548705%;
    left: 42.5321463897%;
    font-size: 11px;
    filter: blur(1.38px);
    animation: 23s float2 infinite;
  }
  .particle:nth-child(70) {
    top: 61.8404907975%;
    left: 2.9556650246%;
    font-size: 15px;
    filter: blur(1.4px);
    animation: 39s float2 infinite;
  }
  .particle:nth-child(71) {
    top: 13.7423312883%;
    left: 4.9261083744%;
    font-size: 15px;
    filter: blur(1.42px);
    animation: 22s float2 infinite;
  }
  .particle:nth-child(72) {
    top: 83.8554216867%;
    left: 76.6990291262%;
    font-size: 30px;
    filter: blur(1.44px);
    animation: 40s float2 infinite;
  }
  .particle:nth-child(73) {
    top: 77.1672771673%;
    left: 74.5829244357%;
    font-size: 19px;
    filter: blur(1.46px);
    animation: 37s float2 infinite;
  }
  .particle:nth-child(74) {
    top: 48.1572481572%;
    left: 81.8540433925%;
    font-size: 14px;
    filter: blur(1.48px);
    animation: 27s floatReverse2 infinite;
  }
  .particle:nth-child(75) {
    top: 28.3272283272%;
    left: 20.6084396467%;
    font-size: 19px;
    filter: blur(1.5px);
    animation: 23s floatReverse infinite;
  }
  .particle:nth-child(76) {
    top: 58.6080586081%;
    left: 21.5897939156%;
    font-size: 19px;
    filter: blur(1.52px);
    animation: 32s floatReverse2 infinite;
  }
  .particle:nth-child(77) {
    top: 92.0440636475%;
    left: 26.5486725664%;
    font-size: 17px;
    filter: blur(1.54px);
    animation: 26s float infinite;
  }
  .particle:nth-child(78) {
    top: 73.8007380074%;
    left: 11.8460019743%;
    font-size: 13px;
    filter: blur(1.56px);
    animation: 26s float2 infinite;
  }
  .particle:nth-child(79) {
    top: 72.5490196078%;
    left: 51.1811023622%;
    font-size: 16px;
    filter: blur(1.58px);
    animation: 29s float infinite;
  }
  .particle:nth-child(80) {
    top: 93.7198067633%;
    left: 16.5369649805%;
    font-size: 28px;
    filter: blur(1.6px);
    animation: 31s float infinite;
  }

  @keyframes apparition {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(180px);
    }
  }
  @keyframes floatReverse {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-180px);
    }
  }
  @keyframes float2 {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(28px);
    }
  }
  @keyframes floatReverse2 {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-28px);
    }
  }
`;

const NotFound = () => {
  return (
    <>
      <ErrorPage>
        <main className="container">
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">4</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <span className="particle">0</span>
          <article className="content">
            <p>Damnit stranger,</p>
            <p>
              You got lost in the <strong>404</strong> galaxy.
            </p>
            <p>
              <Link to="/" style={{ textDecoration: 'none' }}>
                {' '}
                <button> Go back to 🏡 </button>
              </Link>
            </p>
          </article>
        </main>
      </ErrorPage>
    </>
  );
};

export default NotFound;
