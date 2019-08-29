import React from 'react'

export class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
        this.close = this.close.bind(this)
    }

    componentDidUpdate() {
        const { listOpen } = this.state
        setTimeout(() => {
            if (listOpen) {
                window.addEventListener('click', this.close)
            }
            else {
                window.removeEventListener('click', this.close)
            }
        }, 0)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.close)
    }

    close(timeOut) {
        this.setState({
            listOpen: false
        })
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    render() {
        const { list } = this.props
        const { listOpen, headerTitle } = this.state
        return (
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => this.toggleList()}>
                    <div className="dd-header-title">{headerTitle}</div>
                </div>
                {listOpen && <ul className="dd-list" onClick={e => e.stopPropagation()}>
                    {list.map((item) => (
                        <>{item.jsx}</>
                    ))}
                </ul>}
            </div>
        )
    }
}