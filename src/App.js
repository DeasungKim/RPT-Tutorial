
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '김대성',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/1',
  'name': '정이주',
  'birthday': '811024',
  'gender': '여자',
  'job': '간호사'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김재윤',
  'birthday': '140820',
  'gender': '여자',
  'job': '대학생'
}
]
function App() {
  return (
    <div>
      {
        customers.map( c => {
          return(
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
          );
        })
      }
      
    </div>
  );
}

export default App;
