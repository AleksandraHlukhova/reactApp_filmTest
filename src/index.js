import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dis/css/bootstrap.min.css"

const movie = {
  title: "Звездные войны",
  vote: 9,
  img: "https://vesti.ua/wp-content/uploads/2019/12/Skrestilis-800x530.jpg",
  overview: 'loremzdrhzhxjjxfxj'
};

// function MovieItem(props) {
//   console.log(props);
//   const {data: {title, vote, img}} = props;
//   return(
//     <div>
//     <p>{title}</p>
//     <p>{vote}</p>
//     <img src={img} alt="title"/>
//     </div>
//   );
// }

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      like: false
    }
  }
  toggleOverView = () => {
    this.setState({
      show: !this.state.show,
    })
  }
  handleLike = () => {
    this.setState({
      like: !this.state.like,
    })
  }
  render() {
    const {data: {title, vote, img, overview}} = this.props;
    console.log('state', this.state);
    console.log(this);

    return(
      <div>
        <div style={{margin: "0 auto", width: "500px"}}>
          <div>
            <img src={img} alt="title" style={{maxWidth: "100%"}}/>
          </div>
          <p>{title}</p>
          <p>{vote}</p>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <button type="button" onClick={this.toggleOverView}>{this.state.show ? 'hide' : 'show'}</button>
            <button type="button" onClick={this.handleLike} className={this.state.like ? 'btn_like' : ''}
            >{this.state.like ? 'unlike' : 'like'}</button>
          </div>
          {this.state.show ? <p>{overview}</p> : null}
        </div>
    </div>
    );
  }
}

function App() { 
  return (
    <MovieItem data={movie}/>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));