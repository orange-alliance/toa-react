import * as React from 'react';
import NextLink from 'next/link';
import { Match, MatchParticipant } from '@the-orange-alliance/api/lib/cjs/models';
import { TableRow, TableCell, Grid, Typography, Box, Link } from '@mui/material';
import IconPlay from '@mui/icons-material/PlayCircleOutline';
import { colorCalc, isSameDay } from '../../lib/utils/common';
import { useTheme } from '@mui/material/styles';
import { useUserLanguage } from '../../i18n/i18n';
import { ReactNode } from 'react';

interface IProps {
  match: Match;
  forceSmall?: boolean;
  selectedTeam?: MatchParticipant | null;
  setSelectedTeam?: (participant: MatchParticipant | null) => void;
  setSelectedMatch?: (match: Match | null) => void;
}

const MatchTableRow = ({
  match,
  forceSmall,
  selectedTeam,
  setSelectedTeam,
  setSelectedMatch
}: IProps) => {
  const sideBySideSx = forceSmall
    ? { display: 'none' }
    : { display: { xs: `none`, md: 'table-row' } };
  const stackedSx = forceSmall
    ? { display: 'table-row' }
    : { display: { xs: 'table-row', md: 'none' } };
  const scheduleTime = new Date(match.scheduledTime);

  return (
    <>
      {/* SIDE-BY-SIDE ALLIANCES */}
      <TableRow sx={sideBySideSx}>
        <TableCell
          className={'p-0'}
          padding={'none'}
          onClick={() => match.redScore > -1 && setSelectedMatch && setSelectedMatch(match)}
          style={{ cursor: 'pointer' }}
        >
          <Typography align="center" fontSize="0.875rem">
            {match.matchName}
          </Typography>
        </TableCell>
        <TableCell
          padding="none"
          sx={{
            textAlign: 'center',
            verticalAlign: 'middle'
          }}
        >
          {match.videoURL ? (
            <Link href={match.videoURL} target="_blank" rel="noopener noreferrer" color="secondary">
              <IconPlay
                sx={{
                  fontSize: '1.25rem',
                  verticalAlign: 'middle'
                }}
              />
            </Link>
          ) : (
            <IconPlay
              sx={{
                color: 'rgba(0, 0, 0, 0.12)',
                fontSize: '1.25rem',
                verticalAlign: 'middle'
              }}
            />
          )}
        </TableCell>
        <TableCell padding={'none'}>
          <Grid container>
            <MatchTeamDisplay
              match={match}
              color="red"
              win={match.redScore > match.blueScore}
              setSelectedTeam={setSelectedTeam}
              selectedTeam={selectedTeam}
            />
          </Grid>
        </TableCell>
        <TableCell padding={'none'}>
          <Grid container>
            <MatchTeamDisplay
              match={match}
              color="blue"
              win={match.redScore < match.blueScore}
              setSelectedTeam={setSelectedTeam}
              selectedTeam={selectedTeam}
            />
          </Grid>
        </TableCell>
        {(match.redScore > -1 || isNaN(scheduleTime.getTime())) && (
          <>
            <TableCell padding={'none'}>
              <Grid container>
                <MatchScoreDisplay
                  score={match.redScore}
                  color="red"
                  win={match.redScore > match.blueScore}
                />
              </Grid>
            </TableCell>
            <TableCell padding={'none'}>
              <Grid container>
                <MatchScoreDisplay
                  score={match.blueScore}
                  color="blue"
                  win={match.redScore < match.blueScore}
                />
              </Grid>
            </TableCell>
          </>
        )}
        {match.redScore === -1 && !isNaN(scheduleTime.getTime()) && (
          <TableCell colSpan={2} padding={'none'}>
            <Grid container>
              <ScheduledTimeDisplay time={scheduleTime} />
            </Grid>
          </TableCell>
        )}
      </TableRow>

      {/* STACKED ALLIANCES */}
      <TableRow sx={stackedSx}>
        <TableCell
          onClick={() => setSelectedMatch && setSelectedMatch(match)}
          style={{ cursor: 'pointer' }}
        >
          <Typography align="center" fontSize="0.875rem">
            {match.matchName}
          </Typography>
        </TableCell>
        <TableCell>
          {match.videoURL ? (
            <Link href={match.videoURL} target="_blank" rel="noopener noreferrer" color="secondary">
              <IconPlay
                sx={{
                  fontSize: '1.25rem',
                  verticalAlign: 'middle'
                }}
              />
            </Link>
          ) : (
            <IconPlay
              sx={{
                color: 'rgba(0, 0, 0, 0.12)',
                fontSize: '1.25rem',
                verticalAlign: 'middle'
              }}
            />
          )}
        </TableCell>
        <TableCell padding={'none'}>
          <Grid container>
            <MatchTeamDisplay
              match={match}
              color="red"
              win={match.redScore > match.blueScore}
              setSelectedTeam={setSelectedTeam}
              selectedTeam={selectedTeam}
            />
            <MatchTeamDisplay
              match={match}
              color="blue"
              win={match.redScore < match.blueScore}
              setSelectedTeam={setSelectedTeam}
              selectedTeam={selectedTeam}
            />
          </Grid>
        </TableCell>
        <TableCell padding={'none'}>
          <Grid container>
            <MatchScoreDisplay
              score={match.redScore}
              color="red"
              win={match.redScore > match.blueScore}
            />
            <MatchScoreDisplay
              score={match.blueScore}
              color="blue"
              win={match.redScore < match.blueScore}
            />
          </Grid>
        </TableCell>
      </TableRow>
    </>
  );
};

const MatchTeamDisplay = ({
  match,
  color,
  win,
  setSelectedTeam,
  selectedTeam
}: {
  match: Match;
  color: string;
  win: boolean;
  setSelectedTeam?: (participant: MatchParticipant | null) => void;
  selectedTeam?: MatchParticipant | null;
}) => {
  const teamCount = match.participants.length;
  const startPos = color === 'red' ? 0 : teamCount / 2;
  const teams = match.participants
    .sort((a, b) => a.station - b.station)
    .slice(startPos, startPos + teamCount / 2);
  const theme = useTheme();

  const selectTeam = (team: MatchParticipant) => {
    if (
      (setSelectedTeam && selectedTeam && selectedTeam.teamKey !== team.teamKey) ||
      !selectedTeam
    ) {
      setSelectedTeam && setSelectedTeam(team);
    } else if (setSelectedTeam && selectedTeam && selectedTeam.teamKey === team.teamKey) {
      setSelectedTeam(null);
    }
  };

  const GetLinkElement = ({ team, children }: { team: MatchParticipant; children: ReactNode }) =>
    typeof setSelectedTeam !== 'function' ? (
      <NextLink id={`/teams/${team.teamKey}`} href={`/teams/${team.teamKey}`} passHref>
        {children}
      </NextLink>
    ) : (
      <React.Fragment>{children}</React.Fragment>
    );

  return (
    <Grid item xs={12}>
      <Grid container>
        {teams.map((team: MatchParticipant) => (
          <Grid
            key={team.teamKey}
            item
            xs={(24 / teamCount) as 3 | 4}
            style={{
              backgroundColor: colorCalc(selectedTeam?.teamKey === team.teamKey, color, win),
              textAlign: 'center'
            }}
            onClick={() => selectTeam(team)}
          >
            <GetLinkElement team={team}>
              <Link
                underline="none"
                sx={{
                  ...theme.typography.body1,
                  textAlign: 'center',
                  fontWeight: win ? 700 : undefined,
                  color: theme.palette.text.primary,
                  padding: '0.5rem',
                  display: 'block'
                }}
              >
                {team.teamKey}
              </Link>
            </GetLinkElement>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const MatchScoreDisplay = ({
  score,
  color,
  win
}: {
  score: number;
  color: string;
  win: boolean;
}) => {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={12}
      style={{
        backgroundColor: colorCalc(false, color, win)
      }}
    >
      <Typography
        variant={'body1'}
        color={'inherit'}
        style={{
          ...theme.typography.body1,
          textAlign: 'center',
          fontWeight: win ? 700 : undefined,
          color: theme.palette.text.primary,
          padding: '0.5rem',
          display: 'block'
        }}
      >
        {score > -1 ? score : '?'}
      </Typography>
    </Grid>
  );
};

const ScheduledTimeDisplay = ({ time }: { time: Date }) => {
  const theme = useTheme();
  const lang = useUserLanguage();
  const isToday = isSameDay(time, new Date());
  const displayString = !isToday
    ? time.toLocaleDateString(`en-${lang}`, { weekday: 'short' }) +
      ' ' +
      time.toLocaleTimeString(`en-${lang}`, {
        hour: 'numeric',
        minute: 'numeric'
      })
    : time.toLocaleTimeString(`en-${lang}`, { hour: 'numeric', minute: 'numeric' });
  return (
    <Grid
      item
      xs={12}
      style={
        {
          // backgroundColor: colorCalc(false, color, win)
        }
      }
    >
      <Typography
        variant={'body1'}
        color={'inherit'}
        style={{
          textAlign: 'center',
          textDecoration: 'none',
          fontStyle: 'italic',
          color: theme.palette.text.primary,
          padding: '0.5rem'
        }}
      >
        {displayString}
      </Typography>
    </Grid>
  );
};

export default MatchTableRow;
