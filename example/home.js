import React, { Component } from 'react'
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
} from 'react-native'
import {
	Colors
} from 'react-native/Libraries/NewAppScreen'
import ComponentList from './componentList'

const Header = () => (
	<View style={{ overflow: 'hidden', height: 250 }}>
		<ImageBackground
			accessibilityRole={'image'}
			source={require('./logo.png')}
			style={styles.background}
			imageStyle={styles.logo}>
			<Text style={styles.text}>Welcome to mCloud Design</Text>
		</ImageBackground>
	</View>

);

const LinkList = (props) => (
	<View style={styles.container}>
		{ComponentList.map((item, index) => {
			return (
				<React.Fragment key={index}>
					<View style={styles.separator} />
					<TouchableOpacity
						accessibilityRole={'button'}
						onPress={() => {
							props.navigation.navigate(item.title)
						}}
						style={styles.linkContainer}>
						<Text style={styles.link}>{item.title}</Text>
						<Text style={styles.description}>{item.description}</Text>
					</TouchableOpacity>
				</React.Fragment>
			);
		})}
	</View>
);


export default class Home extends Component {
	render() {
		const {
			navigation
		} = this.props
		return (
			<SafeAreaView style={styles.body}>
				<StatusBar barStyle="dark-content" />
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}
				>
					<Header
						navigation={navigation}
					/>
					<LinkList
						navigation={navigation}
					/>
				</ScrollView>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	body: {
		backgroundColor: Colors.white,
		flex: 1
	},
	container: {
		marginTop: 10,
		paddingHorizontal: 24,
	},
	linkContainer: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 8,
	},
	link: {
		flex: 2,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.primary,
	},
	description: {
		flex: 3,
		paddingVertical: 16,
		fontWeight: '400',
		fontSize: 18,
		color: Colors.dark,
	},
	separator: {
		backgroundColor: Colors.light,
		height: 1,
	},
	background: {
		paddingBottom: 40,
		paddingTop: 96,
		paddingHorizontal: 32,
		backgroundColor: Colors.lighter,
	},
	logo: {
		opacity: 0.2,
		overflow: 'visible',
		resizeMode: 'cover',
		marginLeft: -128,
		marginBottom: -192,
	},
	text: {
		fontSize: 40,
		fontWeight: '600',
		textAlign: 'center',
		color: Colors.black,
	},
})
