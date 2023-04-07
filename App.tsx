import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  // const {height, width, scale, fontScale} = useWindowDimensions();
  const window = useWindowDimensions();
  const [data, setData] = useState([
    {
      title: 'mountain',
      description: 'saya lagi di gunung',
      imageUrl:
        'https://images.unsplash.com/photo-1679580786545-bba4e2fd5f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1127&q=80',
    },
    {
      title: 'mountain',
      description: 'saya lagi di gunung',
      imageUrl:
        'https://images.unsplash.com/photo-1680006022769-fdc2605a3dd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'mountain',
      description: 'saya lagi di gunung',
      imageUrl:
        'https://images.unsplash.com/photo-1680511037243-90060c7fa579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      title: 'mountain',
      description: 'saya lagi di gunung',
      imageUrl:
        'https://images.unsplash.com/photo-1680631757284-617846a5ef29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1902&q=80',
    },
    {
      title: 'mountain',
      description: 'saya lagi di gunung',
      imageUrl:
        'https://images.unsplash.com/photo-1680515046707-18c95f80406f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      title: 'mountain',
      description: 'saya lagi di gunung',
      imageUrl:
        'https://images.unsplash.com/photo-1680371130801-3701acb35d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
      <View style={{marginHorizontal: 20, marginTop: 20, flexDirection: 'row'}}>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1679403423791-91e190b4a9c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            }}
            style={{width: 60, height: 60, borderRadius: 60 / 2}}></Image>
          <Text style={{fontSize: 12, marginTop: 10}}>@suffy</Text>
          <Text style={{fontWeight: 'bold', color: '#212121'}}>
            suffy yanuar <Icon name="check-circle" size={12} color="#59c5f4" />
          </Text>
        </View>

        <View
          style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text>Post</Text>
          <Text style={{fontWeight: 'bold', color: '#212121'}}>96</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text>Following</Text>
          <Text style={{fontWeight: 'bold', color: '#212121'}}>300</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text>Followers</Text>
          <Text style={{fontWeight: 'bold', color: '#212121'}}>2100</Text>
        </View>
      </View>

      <View style={{marginHorizontal: 20}}>
        <Text>Be your best self 😊</Text>
        <Text>Seorang youtuber yang baru buat konten</Text>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 20}}>
        <TouchableOpacity
          style={{
            flex: 1,
            paddingVertical: 12,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            elevation: 2,
            marginRight: 5,
          }}>
          <Text style={{color: '#59c5f4', fontWeight: 'bold'}}>Unfollow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            paddingVertical: 12,
            backgroundColor: '#59c5f4',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            elevation: 2,
            marginLeft: 5,
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Follow</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 20}}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="image" size={20} color="#59c5f4" />
          <Text style={{fontWeight: 'bold'}}>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="play" size={20} color="#59c5f4" />
          <Text>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="tags" size={20} color="#59c5f4" />
          <Text>Tagged</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, marginHorizontal: 20, marginTop: 20}}>
        <FlatGrid
          data={data}
          itemDimension={100}
          spacing={0}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginHorizontal: 5,
                marginTop: 5,
                borderRadius: 6,
                backgroundColor: '#fff',
                elevation: 2,
                paddingVertical: 10,
                marginBottom: 5,
              }}>
              <Image
                style={{
                  height: 100,
                  borderRadius: 6,
                }}
                source={{uri: item.imageUrl}}></Image>
              <View style={{marginHorizontal: 5}}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}></FlatGrid>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          borderTopWidth: 1,
          borderTopColor: '#bdbdbd',
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Icon name="home" solid size={18} color="#59c5f4" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Icon name="image" solid size={18} color="#59c5f4" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Icon name="play" solid size={18} color="#59c5f4" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            backgroundColor: '#59c5f4',
          }}>
          <Icon name="user" solid size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
