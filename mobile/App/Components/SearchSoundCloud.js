const React = require('react-native');

const {
	AlertIOS,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  NavigatorIOS,
  Dimensions,
  StyleSheet
} = React;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  searchInput: {
  	height: 50,
    padding: 4,
    marginRight: 5,
    marginBottom: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
	title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

const {width, height} = Dimensions.get('window');

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};
	}
	handleSubmit() {
		AlertIOS.alert('Alert!', 'Button pressed!');
		fetch('http://localhost:8000/tracks', {
			method: 'post',
			body: JSON.stringify(this.state)
		})
			.then(res => res.json())
			.then(json => AlertIOS.alert('Alert', 'json!'))
			.catch(err => AlertIOS.alert('Error', 'There has been a fetch error...'));

	}
	handleChange(event) {
		this.setState({
			query: event.nativeEvent.text
		});
	}
	render() {
		return (
			<View
				style={styles.mainContainer}>
				<TextInput
					style={styles.searchInput}
					onChange={this.handleChange.bind(this)}
					placeholder="Search SoundCloud.com..." />
				<TouchableHighlight
					style={styles.button}
					onPress={this.handleSubmit.bind(this)}>
					<Text
						style={styles.buttonText}>
						Search
					</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

module.exports = SearchBar;