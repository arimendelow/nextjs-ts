// This is the Link API
import Link from 'next/link';
import * as React from 'react';
import { NextPage, NextPageContext, NextComponentType } from 'next';
import fetch from 'isomorphic-unfetch';

import '../styles/tailwind.src.css';

import { compose } from 'recompose';
import { connect } from 'react-redux';
import Page from '../redux/containers/page';
import { addTodo } from '../redux/actions';
import { Store } from '../redux/store';

interface IndexPageContext extends NextPageContext {
  store: Store;
}

const IndexPage: NextComponentType<IndexPageContext> = compose()(Page);

IndexPage.getInitialProps = ({ store, req }) => {
  const isServer: boolean = !!req;

  // we can add any custom data here
  const { todo } = store.getState();
  store.dispatch(addTodo(Object.assign(todo.item, {
    value: 'Hello World!',
  })));

  return {
    isServer,
  };
}

export default connect()(IndexPage);