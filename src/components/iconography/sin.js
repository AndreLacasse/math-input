/**
 * An autogenerated component that renders the SIN iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');

const Sin = React.createClass({
    propTypes: {
        primaryColor: React.PropTypes.string,
        secondaryColor: React.PropTypes.string,
    },

    getDefaultProps() {
        return {
            primaryColor: '#3B3E40',
            secondaryColor: '#BABEC2',
        };
    },

    render() {
        return <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="math_keypad_icon_sine">
                    <g>
                        <rect id="bounds" fillOpacity="0" fill="#FF0088" x="0" y="0" width="48" height="48"></rect>
                        <g id="icon" transform="translate(12.000000, 12.000000)">
                            <rect id="bounds" fillOpacity="0" fill="#FF0088" x="0" y="0" width="24" height="24"></rect>
                            <path d="M6.655,17.168 C8.531,17.168 9.581,16.23 9.581,14.998 C9.581,12.268 5.577,13.108 5.577,12.1 C5.577,11.722 5.997,11.428 6.641,11.428 C7.467,11.428 8.237,11.778 8.643,12.212 L9.357,10.994 C8.685,10.462 7.775,10.07 6.627,10.07 C4.849,10.07 3.855,11.064 3.855,12.198 C3.855,14.858 7.873,13.948 7.873,15.068 C7.873,15.488 7.509,15.796 6.739,15.796 C5.899,15.796 4.891,15.334 4.401,14.872 L3.631,16.118 C4.345,16.776 5.479,17.168 6.655,17.168 L6.655,17.168 Z M11.779,9.51 C12.367,9.51 12.843,9.034 12.843,8.446 C12.843,7.858 12.367,7.396 11.779,7.396 C11.205,7.396 10.715,7.858 10.715,8.446 C10.715,9.034 11.205,9.51 11.779,9.51 L11.779,9.51 Z M12.675,17 L12.675,10.238 L10.897,10.238 L10.897,17 L12.675,17 Z M20.781,17 L20.781,12.226 C20.781,10.91 20.067,10.07 18.583,10.07 C17.477,10.07 16.651,10.602 16.217,11.12 L16.217,10.238 L14.439,10.238 L14.439,17 L16.217,17 L16.217,12.45 C16.511,12.044 17.057,11.652 17.757,11.652 C18.513,11.652 19.003,11.974 19.003,12.912 L19.003,17 L20.781,17 Z" id="sin" fill={this.props.primaryColor}></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>;
    },
});

module.exports = Sin;