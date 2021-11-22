import * as React from "react";
import { Match, MatchParticipant } from "@the-orange-alliance/api/lib/cjs/models";
import {
  TableRow,
  TableCell,
  Grid,
  Button,
  Typography
} from "@mui/material";
import IconPlay from "@mui/icons-material/PlayCircleOutline";

interface IProps {
  match: Match;
}
const MatchTable = ({ match }: IProps) => {
  return (
    <TableRow>
      <TableCell>
        <Typography align='center'>{match.matchName}</Typography>
      </TableCell>
      <TableCell>
        {match.videoURL ? (
          <a href={match.videoURL}>
            <IconPlay />
          </a>
        ) : (
          <IconPlay />
        )}
      </TableCell>
      <TableCell padding={"none"}>
        <Grid container>
          <MatchTeamDisplay match={match} color='red'/>
          <MatchTeamDisplay match={match} color='blue'/>
        </Grid>
      </TableCell>
      <TableCell padding={"none"}>
        <Grid container>
          <MatchScoreDisplay score={match.redScore} color='red'/>
          <MatchScoreDisplay score={match.blueScore} color='blue'/>
        </Grid>
      </TableCell>
    </TableRow>
  );
}

const MatchTeamDisplay = ({ match, color }: { match: Match; color: string }) => {
  const teamCount = match.participants.length;
  const startPos = color === "red" ? 0 : teamCount / 2 - 1;
  const teams = match.participants.slice(startPos, startPos + teamCount / 2);

  return (
    <Grid item xs={12}>
      <Grid container>
        {teams.map((team: MatchParticipant) => (
          <Grid key={team.teamKey} item xs={(24 / teamCount) as 3 | 4} className={`${color}-bg`}>
            <Button fullWidth>
              <a href={`/teams/${team.teamKey}`}>{team.teamKey}</a>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
const MatchScoreDisplay = ({ score, color }: { score: number; color: string }) => {
  return (
    <Grid item xs={12} className={`${color}-bg`}>
      <Button fullWidth>{score}</Button>
    </Grid>
  );
}

export default MatchTable;