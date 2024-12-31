import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableDetailProps {
  popularity: number;
  runtime: number;
  vote_average: number;
  vote_count: number;
}

const TableDetail = ({
  popularity,
  runtime,
  vote_average,
  vote_count,
}: TableDetailProps) => {
  return (
    <Table>
      <TableHeader className="bg-neutral-100">
        <TableRow>
          <TableHead>Popularity</TableHead>
          <TableHead>Run Time</TableHead>
          <TableHead>Vote Average</TableHead>
          <TableHead>Vote Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>{popularity}</TableCell>
          <TableCell>{runtime}</TableCell>
          <TableCell>{vote_average}</TableCell>
          <TableCell>{vote_count}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableDetail;
