import React from 'react';

import { fetchHipDadNews } from '../util/DBUtil';
import { NewsContainer } from '../containers/news/NewsContainer';
import { scrollToTop } from '../util/AppUtil';
/*
    Container that holds the News page
 */
export class NewsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            news: [],
            visableNews: []
        }

        this.handleFetchedNews = this.handleFetchedNews.bind(this);
        this.handleNewerStories = this.handleNewerStories.bind(this);
        this.handleOlderStories = this.handleOlderStories.bind(this);
        this.updateVisibleEpisodes = this.updateVisibleEpisodes.bind(this);
    }

    handleFetchedNews(news) {
        this.setState({
            news: news,
            visableNews: news.slice(0, 10)
        });
    }

    updateVisibleEpisodes(page) {
        this.setState({
            visableNews: this.state.news.slice(page * 10, page * 10 + 10),
            page: page
        });
    }

    handleOlderStories() {
        scrollToTop();
        setTimeout((self) => {
            self.updateVisibleEpisodes(self.state.page + 1)
        }, 500, this);
    }

    handleNewerStories() {
        scrollToTop();
        setTimeout((self) => {
            self.updateVisibleEpisodes(self.state.page - 1)
        }, 500, this);
    }

    componentDidMount() {
        fetchHipDadNews(this.handleFetchedNews);
    }

    render() {
        const newerStoriesExist = this.state.page;
        const olderStoriesExist = this.state.news.length > (this.state.page + 1) * 10;

        return (
            <div >
                <h2>News</h2>
                <div className="newsContainer">
                    {this.state.visableNews.map(news => (
                        <NewsContainer key={news.title} date={news.date} title={news.title} text={news.text} image={news.image} />
                    ))}
                    <br />
                    <button id="Newer News" onClick={this.handleNewerStories} hidden={!newerStoriesExist}>Newer Stories</button>
                    <button id="Older News" onClick={this.handleOlderStories} hidden={!olderStoriesExist}>Older Stories</button>
                </div>
            </div >
        );
    }
}