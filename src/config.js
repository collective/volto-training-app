/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  tiles as defaultTiles,
} from '@plone/volto/config';

import { AlbumView, FullView, RatingWidget } from './components';

export const settings = {
  ...defaultSettings,
};

export const views = {
  ...defaultViews,
  layoutViews: {
    ...defaultViews.layoutViews,
    album_view: AlbumView,
    full_view: FullView,
  },
};

export const widgets = {
  ...defaultWidgets,
  id: {
    ...defaultWidgets.id,
    rating: RatingWidget,
  },
};

export const tiles = {
  ...defaultTiles,
};
