import './App.css';
import BoxColor from './components/BoxColor';
import Carousel from './components/Carousel';
import ClickablePicture from './components/ClickablePicture';
import CreditCard from './components/CreditCard';
import Dice from './components/Dice';
import DriverCard from './components/DriverCard';
import FaceBook from './components/FaceBook';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import NumbersTable from './components/NumbersTable';
import Random from './components/Random';
import Rating from './components/Rating';
import RGBColorPicker from './components/RGBColorPicker';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <div className="App">

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toLocaleString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toLocaleString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />


      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />


      {/* Box Color */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* Credit Card componets */}

      <div className="cards">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>



      {/* RATINGS */}
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>





      {/* DRIVER CARD 7 */}
      <div className="CarCards">

        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />


      </div>

      {/* Iteration 8 | State: LikeButton */}
      <LikeButton />


      {/* Iteration 9: State: ClickablePicture */}
      <ClickablePicture />


      {/* Iteration 10 | State: Dice */}
      <Dice />

      {/* Iteration 11 | State: Carousel */}
      <Carousel images={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]} />



      {/* Iteration 12 | List and Keys | NumbersTable */}
      <NumbersTable limit={12} />



      {/* Iteration 13 | List and Keys - FaceBook (Simple) */}
      {/* Iteration 14 | List and Keys - FaceBook (Advanced) */}
      <FaceBook />



      {/* Iteration 15 | Form - SignupPage */}
      <SignupPage />


      {/* Iteration 16 | Lifting State Up - RGBColorPicker*/}
      <RGBColorPicker />
      

    </div>





  );
}

export default App;
