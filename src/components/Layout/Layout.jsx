import React, {Component} from 'react';
import './Layout.css';

export class Layout extends Component {
  render() {
    let {header, content, footer} = this.props;
    return (
      <div className="layout">
        {header && (
          <header className="layout__header">
            {header}
          </header>
        )}

        {content && (
          <main className="layout__content">
            {content}
          </main>
        )}

        {footer && (
          <footer className="layout__footer">
            {footer}
          </footer>
        )}
      </div>
    );
  }
}

