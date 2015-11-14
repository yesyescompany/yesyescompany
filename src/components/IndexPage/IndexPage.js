import React, { Component } from 'react';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import styles from './IndexPage.scss';

@withContext
@withStyles(styles)
export default class IndexPage extends Component {
  render() {
    return (
      <div className="IndexPage">
        <div className="header">
          <h1>뭘 하는데요?</h1>
        </div>
        <div className="container">
          <div className="asset-group">
            <div className="asset">
              <h2>Design Approach</h2>
              <p>Not all websites are the same and not every client requires identical technology. At August Ash, our unique and agile approach to each client ensures that your website meets the long-term goals of your business—helping you maximize your online business potential.</p>
            </div>
            <div className="asset">
              <h2>Development Process</h2>
              <p>Every website has its own purpose and goals. At August Ash, we help you design, build and grow your website so that it meets your specific online marketing needs and potential. Our comprehensive and collaborative approach ensures that your website has the features, infrastructure and capabilities that place you on the road to success.</p>
            </div>
          </div>
        </div>
        <div className="header">
          <h1>우리가 누굴까요</h1>
        </div>
        <div className="container">
          <div className="member-group">
            <div className="member">
              <img
                src="https://avatars1.githubusercontent.com/u/15513971?v=3&s=460"
                alt="yesyes"
              />
              <div className="role">Designer</div>
              <div className="desc">다양한 디자인 경험 보유</div>
            </div>
            <div className="member">
              <img
                src="https://avatars1.githubusercontent.com/u/15513971?v=3&s=460"
                alt="yesyes"
              />
              <div className="role">Programmer</div>
              <div className="desc">프론트엔드 전문</div>
            </div>
          </div>
        </div>
        <div className="header">
          <h1>가격은요?</h1>
        </div>
        <div className="container">
          <div className="pricing-group">
            <div className="pricing">
              <ul className="pricing-table">
                <li className="title">기본형</li>
                <li className="price">$10.99</li>
                <li className="description">An awesome description</li>
                <li className="bullet-item">1 Database</li>
                <li className="bullet-item">5GB Storage</li>
                <li className="bullet-item">20 Users</li>
                <li className="cta-button"><a className="button" href="#">문의하기</a></li>
              </ul>
            </div>
            <div className="pricing">
              <ul className="pricing-table">
                <li className="title">고급형</li>
                <li className="price">$30.99</li>
                <li className="description">An awesome description</li>
                <li className="bullet-item">10 Database</li>
                <li className="bullet-item">20GB Storage</li>
                <li className="bullet-item">1000 Users</li>
                <li className="cta-button"><a className="button" href="#">문의하기</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
