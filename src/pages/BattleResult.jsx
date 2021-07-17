import React, { Component } from "react"
import axios from "axios";
import MyCard from "@/components/MyCard.jsx";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faShareAlt, faExclamation, } from "@fortawesome/free-solid-svg-icons";
//比较结果展示
export default class BattleResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: {
        owner: {
          avatar_url: "",
        },
        stargazers_count: 0,
      },
      playerTwo: {
        owner: {
          avatar_url: "",
        },
        stargazers_count: 0,
      },
      winner: "",
      errorContent: {},
      error: false
    };
    this.resetTo = this.resetTo.bind(this);
    this.fetchGet = this.fetchGet.bind(this);
  }
  componentDidMount() {
    this.fetchGet();
  }
  async fetchGet() {
    // console.log(this.props);
    let playerOne = {}
    let playerTwo = {}
    if (this.props.location.state) {
      //console.log(this.props.location.state);
      playerOne = this.props.location.state.playerOne;
      playerTwo = this.props.location.state.playerTwo
    } else {
      let obj = {};
      if (
        window.location.href.includes("?") &&
        window.location.href.includes("user1=") &&
        window.location.href.includes("user2=") &&
        window.location.href.includes("&")
      ) {
        let arr = window.location.href.split("?")[1].split("&");
        for (let i = 0; i < arr.length; i++) {
          let res = arr[i].split("=");
          obj[res[0]] = res[1];
        }
      }
      else {
        alert('参数缺失，返回battle页');
        //地址不规范 返回battle
        this.props.history.replace('/battle')
      }
      const { user1, user2 } = obj;
      const urlOne = `https://api.github.com/search/repositories?q=${user1}`;
      const urlTwo = `https://api.github.com/search/repositories?q=${user2}`;
      const resOne = await axios.get(urlOne);
      const resTwo = await axios.get(urlTwo);
      playerOne = resOne.data.items[0];
      playerTwo = resTwo.data.items[0];
    }
    let winner = "";
    if (playerOne.stargazers_count > playerTwo.stargazers_count) {
      winner = playerOne.name;
    } else if (playerOne.stargazers_count < playerTwo.stargazers_count) {
      winner = playerTwo.name;
    }
    this.setState({
      winner,
      playerOne,
      playerTwo,
    });
  }
  resetTo() {
    this.props.history.push({ pathname: "/Battle" });
  }
  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <Container>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <Card className="Card" style={{ marginBottom: 30, backgroundColor: '#b8e2f2' }}>
              <div className="CardNum" style={{ textAlign: 'center' }}>#{winner === playerOne.name
                ? "Winner"
                : winner === ""
                  ? "Draw"
                  : "Loser"}</div>
              <Card.Img className="CardImg img-fluid img-thumbnail" style={{ width: '100%', padding: 20 }} variant="top" src={playerOne.owner.avatar_url} />
              <Card.Body>
                <Card.Title className="CardTitle" style={{ textAlign: 'center', fontSize: 15, color: 'red', textTransform: 'uppercase' }}>{name}</Card.Title>
                <div>
                  <div style={{ marginBottom: "5px" }}>
                    <FontAwesomeIcon style={{ color: '#ffbf74', width: 20 }} icon={faUsers} />
                    <span> {playerOne.owner.login} </span>
                  </div>
                  <div style={{ marginBottom: "5px" }}>
                    <FontAwesomeIcon style={{ color: '#ffd700', width: 20 }} icon={faStar} />
                    <span>{playerOne.stargazers_count} stars</span>
                  </div>
                  <div style={{ marginBottom: "5px" }}>
                    <FontAwesomeIcon style={{ color: '#82c3f5', width: 20 }} icon={faShareAlt} />
                    <span>{playerOne.forks_count} forks</span>
                  </div>
                  <div>
                    <FontAwesomeIcon style={{ color: '#f18a92', width: 20 }} icon={faExclamation} />
                    <span>{playerOne.open_issues_count} open Issues</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <Card className="Card" style={{ marginBottom: 30, backgroundColor: '#b8e2f2' }}>
              <div className="CardNum" style={{ textAlign: 'center' }}>#{winner === playerTwo.name
                ? "Winner"
                : winner === ""
                  ? "Draw"
                  : "Loser"}</div>
              <Card.Img className="CardImg img-fluid img-thumbnail" style={{ width: '100%', padding: 20 }} variant="top" src={playerTwo.owner.avatar_url} />
              <Card.Body>
                <Card.Title className="CardTitle" style={{ textAlign: 'center', fontSize: 15, color: 'red', textTransform: 'uppercase' }}>{name}</Card.Title>
                <div>
                  <div style={{ marginBottom: "5px" }}>
                    <FontAwesomeIcon style={{ color: '#ffbf74', width: 20 }} icon={faUsers} />
                    <span> {playerTwo.owner.login} </span>
                  </div>
                  <div style={{ marginBottom: "5px" }}>
                    <FontAwesomeIcon style={{ color: '#ffd700', width: 20 }} icon={faStar} />
                    <span>{playerTwo.stargazers_count} stars</span>
                  </div>
                  <div style={{ marginBottom: "5px" }}>
                    <FontAwesomeIcon style={{ color: '#82c3f5', width: 20 }} icon={faShareAlt} />
                    <span>{playerTwo.forks_count} forks</span>
                  </div>
                  <div>
                    <FontAwesomeIcon style={{ color: '#f18a92', width: 20 }} icon={faExclamation} />
                    <span>{playerTwo.open_issues_count} open Issues</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <Button onClick={this.resetTo}>
            再来一次
          </Button>
        </div>
      </Container>
    );
  }
}

