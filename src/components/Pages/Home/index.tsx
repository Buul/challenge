import React from 'react';
import WithRepoData from '../../hoc/WithRepoData';
import { Content } from '../../Atoms/Content';
import { List } from '../../Atoms/List';
import { ListItem } from '../../Atoms/ListItem';
import Header from '../../Organisms/Header';
import { RepoInterface } from '../../../interfaces/RepoInterface';

type Props = {
  data?: RepoInterface[],
  loading?: boolean,
};
const RepoList: React.FC<Props> = ({ data, loading }) => (
  <>
    <Header>
      <a href={data?.shift()?.owner.html_url} target="_blank" rel="noopener noreferrer">
        {data?.shift()?.owner.login}
      </a>
      <img src={data?.shift()?.owner.avatar_url} alt="avatar" />
    </Header>
    <Content>
      {(loading && <p>Carregando...</p>) || (
        <List>
          <h2>REPOSITÓRIOS </h2>
          {data?.map((repo) => (
            <ListItem key={repo.id}>
              <div>{repo.full_name}</div>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                VER
              </a>
            </ListItem>
          ))}
        </List>
      )}
    </Content>
  </>
);

export default WithRepoData(RepoList, 'buul');
