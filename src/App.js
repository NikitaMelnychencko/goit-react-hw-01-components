import Profile from './components/Profile/Profile.js';
import user from './data/user.json';
import Section from './components/Section/Section.js';
import Statistics from './components/Statistic/StatisticsList.js';
import data from './data/data.json';
import FriendList from './components/FriendList/FriendList.js';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionList.js';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <>
      <Section>
        <Profile
          key={'Profile'}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Statistics title="Upload stats" stats={data} />
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}
