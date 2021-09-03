import { moviesApi, tvApi, collectionApi } from "api.js";
import React from "react";
import DetailPresenter from "./DetailPresenter.js";
import Tabs from "../../Components/Tabs.js";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      collection: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    let collection = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        if (result.belongs_to_collection) {
          ({ data: collection } = await collectionApi.collectionDetail(
            result.belongs_to_collection.id
          ));
        }
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
      console.log(result);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result, collection });
    }
  }

  render() {
    const { result, loading, error, collection } = this.state;
    console.log(this.state);
    return (
      <DetailPresenter
        result={result}
        loading={loading}
        error={error}
        collection={collection}
      />
    );
  }
}
