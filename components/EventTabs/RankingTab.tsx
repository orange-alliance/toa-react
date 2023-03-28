import NextLink from 'next/link';
import { Table, TableHead, TableRow, TableCell, TableBody, Link, Hidden } from '@mui/material';
import { Ranking, Event } from '@the-orange-alliance/api/lib/cjs/models';
import { useTranslate } from '../../i18n/i18n';

interface IProps {
  event: Event;
}

const RankingTab = (props: IProps) => {
  const { rankings } = props.event;
  const t = useTranslate();

  return (
    <div style={{ overflowY: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('pages.event.subpages.rankings.rank')}</TableCell>
            <TableCell>{t('pages.event.subpages.rankings.team')}</TableCell>
            <TableCell>{t('pages.event.subpages.rankings.ranking_points')}</TableCell>
            <TableCell>{t('pages.event.subpages.rankings.tie_breaker_points')}</TableCell>
            <TableCell>{t('pages.event.subpages.rankings.highest_score')}</TableCell>
            <TableCell>{t('pages.event.subpages.rankings.matches_played')}</TableCell>
            <TableCell>OPR</TableCell>
            <TableCell>NP-OPR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rankings.map((row: Ranking) => (
            <TableRow key={row.team.teamNumber}>
              <TableCell>{row.rank}</TableCell>
              <TableCell>
                <NextLink href={`/teams/${row.team.teamNumber}`} passHref>
                  <Link underline="hover">
                    #{row.team.teamNumber} <Hidden smDown>{row.team.teamNameShort}</Hidden>
                  </Link>
                </NextLink>
              </TableCell>
              <TableCell>{row.rankingPoints}</TableCell>
              <TableCell>{row.tieBreakerPoints}</TableCell>
              <TableCell>{row.highestQualScore}</TableCell>
              <TableCell>{row.played}</TableCell>
              <TableCell>{row.opr}</TableCell>
              <TableCell>{row.npOpr}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RankingTab;
