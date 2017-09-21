// ImageView.js

import PropTypes from 'prop-types';
import { requireNativeComponent, View } from 'react-native';

const iface = {
    name: 'ImageView',
    propTypes: {
        src: PropTypes.array,
        borderRadius: PropTypes.number,
        resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
        ...View.propTypes // include the default view properties
    },
};

const ImageView = requireNativeComponent('RCTImageView', iface);
export default ImageView;
