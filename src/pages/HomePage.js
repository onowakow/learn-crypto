import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div id='homePage' className="page">
      <div id='homeInterpretation' className="interpretation">
        <h2>Welcome to understanding crypto.</h2>
        <p>
          This web application is an interactive look into cryptocurrency
          and how it works. 
        </p>
      </div>
      <div id='homeDemonstration' className="demonstration">
        <h3>How to use this guide</h3>
        <p>
          With bitcoin and other cryptocurrency gaining popularity, I set out to
          understand how <em>crypto</em> works. In my research, I read about
          ledgers, blockchain, hashes, cryptography, and crypto mining. This
          guide seeks to demystify cryptocurrency by breaking it down into
          bite-sized pieces.
        </p>

        <p>
          Each cryptocurrency is built on a slightly different model.{" "}
          <b>This guide will focus on bitcoin,</b> an increasingly popular
          currency.
        </p>

        <p>
          There are many articles on how cryptocurrency works. This guide is
          different because allows you to interact with the concepts. When you
          see a button, click it. Increase values, decrease values, and change
          inputs. I personally learn best in this type of learning environment.
        </p>

        <p>
          One final note: this guide explains the basics of bitcoin, although
          not to a tee. Many of the more advanced details are not pertinent to
          understanding the concept.
        </p>

        <p>
          <b>Click the button below to get started!</b>
        </p>

        <Link to="/ledgers">
          <button className="btn-span">Let's go!</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
