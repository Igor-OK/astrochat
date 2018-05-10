import React, { Component } from 'react';
import debounce from 'debounce';

import './styles.css';

export class InfiniteScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.container = null;
    this.handleScroll = debounce(this.handleScroll.bind(this), 100);
    this.loadMore = this.loadMore.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('scroll', this.handleScroll, { passive: true, capture: true });
  }

  componentWillUnmount() {
    document.body.removeEventListener('scroll', this.handleScroll, { capture: true });
  }

  handleScroll() {
    if (this.container) {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const maxScroll = this.container.clientHeight - windowHeight;
      if (!this.state.isLoading) {
        if (scrollTop + windowHeight >= maxScroll) {
          this.loadMore();
        }
      }
    }
  }

  loadMore() {
    this.setState({
      isLoading: true,
    });

    this.props
      .loadMore()
      .catch(error => console.log('Error', error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  setRef(node) {
    this.container = node;
  }

  render() {
    return this.state.isLoading ? (
      'Loading...'
    ) : (
      <div className="infinite-scroller" ref={this.setRef}>
        {this.props.children}
        {this.props.hasMore ? (
          <button className="infinite-scroller__button" onClick={this.loadMore}>
            Load more
          </button>
        ) : null}
      </div>
    );
  }
}
