import React from "react";
import HomePresenter from "./HomePresenter.js";
import { trendingApi } from "api";

export default class extends React.Component {
  state = {
    trendingMovie: null,
    trendingTVshow: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: trendingMovie },
      } = await trendingApi.trendingMovie();
      const {
        data: { results: trendingTVshow },
      } = await trendingApi.trendingTVshow();
      this.setState({
        trendingMovie,
        trendingTVshow,
      });
    } catch {
      this.setState({
        error: "Can't find movie information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { trendingMovie, trendingTVshow, error, loading } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        trendingMovie={trendingMovie}
        trendingTVshow={trendingTVshow}
        error={error}
        loading={loading}
      />
    );
  }
}
