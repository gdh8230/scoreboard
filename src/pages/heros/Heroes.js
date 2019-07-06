import React from 'react';
import axios from '../../utils/api';
import Pagination from 'rc-pagination';

export class Heroes extends React.Component {
  state = {
    pageSize: 5,
    totalCount: 116,
    currentPage: 1,
    heroes: []
  }

  render() {
    return (
      <>
        <div className="row">
          {this.state.heroes.map(hero => (
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 p-1 p-sm-2 p-md-3" key={hero.hero_id}>
              <div className="card">
                <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                     style={{width: '100%'}} alt={hero.name}></img>
                <div className="card-body">
                  <h5 className="card-title">{hero.name}</h5>
                  <p className="card-text">email: {hero.email}</p>
                  <p className="card-text">sex: {hero.sex}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination total={this.state.totalCount}
                    current={this.state.currentPage}
                    pageSize={this.state.pageSize}
                    onChange={this.onChange}
                    className="d-flex justify-content-center" />
      </>
    );
  }

  componentDidMount() {
    this.getHeroes();
  }

  async getHeroes() {
    const start_index = (this.state.currentPage - 1) * this.state.pageSize;

    const res = await axios.
    get(`/api/user/heroes?start_index=${start_index}&page_size=${this.state.pageSize}`);
    const body = res.data;

    this.setState({
      heroes: body.data,
      totalCount: body.total
    });
  }

  onChange = (e) => {
    console.log(e);
    // start_index update
    this.setState({
      currentPage: e
    }, () => {
      this.getHeroes();
    })
  }
}
