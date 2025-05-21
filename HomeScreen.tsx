import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

// Dummy data
const carouselItems = [
  {
    id: '1',
    title: 'New Features',
    image: require('./assets/Home1.jpg'),
  },
  {
    id: '2',
    title: 'Explore Services',
    image: require('./assets/Home2.jpg'),
  },
  {
    id: '3',
    title: 'Our Mission',
    image: require('./assets/Home3.jpg'),
  },
];

const services = [
  {id: '1', name: 'Web Development', icon: '💻'},
  {id: '2', name: 'Mobile Apps', icon: '📱'},
  {id: '3', name: 'Design', icon: '🎨'},
  {id: '4', name: 'Cloud', icon: '☁️'},
  {id: '5', name: 'AI Solutions', icon: '🧠'},
  {id: '6', name: 'Support', icon: '🛠️'},
];

const featured = [
  {
    id: '1',
    title: 'React Native Starter Kit',
    image: require('./assets/Home4.jpg'),
  },
  {
    id: '2',
    title: 'Advanced Hooks Guide',
    image: require('./assets/Home5.jpg'),
  },
  {
    id: '3',
    title: 'UI Kit Design',
    image: require('./assets/Home6.jpg'),
  },
];

const categories = [
  'Technology',
  'Business',
  'Design',
  'Health',
  'Finance',
  'Education',
];

const testimonials = [
  {
    id: '1',
    name: 'Alice Johnson',
    quote: 'Amazing platform, highly recommend it!',
    avatar: require('./assets/Home7.jpg'),
  },
  {
    id: '2',
    name: 'David Smith',
    quote: 'Great customer support and intuitive UI.',
    avatar: require('./assets/Home8.jpg'),
  },
];

// HomeScreen Component
const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <Carousel />
      <SectionTitle title="Our Services" />
      <ServicesGrid />
      <SectionTitle title="Featured Products" />
      <FeaturedList />
      <SectionTitle title="Categories" />
      <CategoryList />
      <SectionTitle title="What Our Users Say" />
      <TestimonialList />
      <ContactBanner navigation={navigation} />
      <Footer />
    </ScrollView>
  );
};

// Header
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Home</Text>
  </View>
);

// Search Bar
const SearchBar = () => (
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.searchInput}
      placeholder="Search..."
      placeholderTextColor="#999"
    />
  </View>
);

// Carousel
const Carousel = () => (
  <FlatList
    data={carouselItems}
    keyExtractor={item => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    renderItem={({item}) => (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} />
        <Text style={styles.carouselText}>{item.title}</Text>
      </View>
    )}
  />
);

// Section Title
const SectionTitle = ({title}: {title: string}) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

// Services Grid
const ServicesGrid = () => (
  <View style={styles.servicesContainer}>
    {services.map(service => (
      <TouchableOpacity key={service.id} style={styles.serviceBox}>
        <Text style={styles.serviceIcon}>{service.icon}</Text>
        <Text style={styles.serviceText}>{service.name}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

// Featured List
const FeaturedList = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.featuredContainer}>
    {featured.map(item => (
      <View key={item.id} style={styles.featuredCard}>
        <Image source={item.image} style={styles.featuredImage} />
        <Text style={styles.featuredText}>{item.title}</Text>
      </View>
    ))}
  </ScrollView>
);

// Category List
const CategoryList = () => (
  <View style={styles.categories}>
    {categories.map((category, index) => (
      <View key={index} style={styles.categoryPill}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    ))}
  </View>
);

// Testimonial List
const TestimonialList = () => (
  <View style={styles.testimonialContainer}>
    {testimonials.map(testimonial => (
      <View key={testimonial.id} style={styles.testimonialCard}>
        <Image source={testimonial.avatar} style={styles.avatar} />
        <View>
          <Text style={styles.testimonialName}>{testimonial.name}</Text>
          <Text style={styles.testimonialQuote}>{testimonial.quote}</Text>
        </View>
      </View>
    ))}
  </View>
);

// Contact Banner
const ContactBanner = ({navigation}) => (
  <View style={styles.contactBanner}>
    <Text style={styles.contactText}>Have Questions? Contact Us!</Text>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Service');
      }}
      style={styles.contactButton}>
      <Text style={styles.contactButtonText}>Contact Support</Text>
    </TouchableOpacity>
  </View>
);

// Footer
const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2025 MyApp. All rights reserved.</Text>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 12,
    color: '#fff',
  },
  carouselItem: {
    width,
    alignItems: 'center',
  },
  carouselImage: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  carouselText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 15,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  serviceBox: {
    width: '40%',
    backgroundColor: '#1e1e1e',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
  },
  serviceIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  serviceText: {
    color: '#fff',
    fontSize: 16,
  },
  featuredContainer: {
    paddingHorizontal: 20,
  },
  featuredCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  featuredImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  featuredText: {
    color: '#fff',
    marginTop: 8,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  categoryPill: {
    backgroundColor: '#333',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 5,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
  testimonialContainer: {
    paddingHorizontal: 20,
  },
  testimonialCard: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  testimonialName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  testimonialQuote: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  contactBanner: {
    backgroundColor: '#292929',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  contactText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  contactButton: {
    backgroundColor: '#FF6B00',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    color: '#aaa',
    fontSize: 12,
  },
});

export default HomeScreen;
