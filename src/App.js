import user from './data/user.json';
import statistics from './data/statistic.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './components/profile/profile';
import Statistics from './components/statistics/statistic';
import FriendList from './components/friends/friends';
import TransactionHistory from './components/transactions/TransactionHistory';

function App() {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className="App">
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
