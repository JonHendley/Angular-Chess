import { Component } from '@angular/core';

export enum Pieces {
  Empty,
  BlackPawn,
  BlackBishop,
  BlackKnight,
  BlackRook,
  BlackQueen,
  BlackKing,
  WhitePawn,
  WhiteBishop,
  WhiteKnight,
  WhiteRook,
  WhiteQueen,
  WhiteKing
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular-Chess';
  icons: String[] = ["assets/chessPieces/blank.png", "assets/chessPieces/b_pawn_png_512px.png", "assets/chessPieces/b_bishop_png_512px.png", "assets/chessPieces/b_knight_png_512px.png",
    "assets/chessPieces/b_rook_png_512px.png", "assets/chessPieces/b_queen_png_512px.png", "assets/chessPieces/b_king_png_512px.png",
    "assets/chessPieces/w_pawn_png_512px.png", "assets/chessPieces/w_bishop_png_512px.png", "assets/chessPieces/w_knight_png_512px.png",
    "assets/chessPieces/w_rook_png_512px.png", "assets/chessPieces/w_queen_png_512px.png", "assets/chessPieces/w_king_png_512px.png"];
  board: Pieces[][] = [
    [Pieces.BlackRook, Pieces.BlackKnight, Pieces.BlackBishop, Pieces.BlackQueen, Pieces.BlackKing, Pieces.BlackBishop, Pieces.BlackKnight, Pieces.BlackRook],
    [Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn],
    [Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty],
    [Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty],
    [Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty],
    [Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty],
    [Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn],
    [Pieces.WhiteRook, Pieces.WhiteKnight, Pieces.WhiteBishop, Pieces.WhiteQueen, Pieces.WhiteKing, Pieces.WhiteBishop, Pieces.WhiteKnight, Pieces.WhiteRook]
  ];
  playerColor = "";
  playersTurn = true;
  pieceSelectedX: number = -1;
  pieceSelectedY: number = -1;

  constructor() {
    // this.playerColor = Math.random() < 0.5 ? "White" : "Black";
    // if (this.playerColor == "Black") {
    //   this.board = [
    //     [Pieces.WhiteRook, Pieces.WhiteKnight, Pieces.WhiteBishop, Pieces.WhiteQueen, Pieces.WhiteKing, Pieces.WhiteBishop, Pieces.WhiteKnight, Pieces.WhiteRook],
    //     [Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn, Pieces.WhitePawn],
    //     [Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty],
    //     [Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty],
    //     [Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty],
    //     [Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty, Pieces.Empty],
    //     [Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn, Pieces.BlackPawn],
    //     [Pieces.BlackRook, Pieces.BlackKnight, Pieces.BlackBishop, Pieces.BlackQueen, Pieces.BlackKing, Pieces.BlackBishop, Pieces.BlackKnight, Pieces.BlackRook]
    //   ];
    //   this.playersTurn = false;
    // }
  }

  selectPiece(x: number, y: number) {
    console.log(x, " ", y);
  }

  isPieceSelected(x: number, y: number): boolean {
    if (this.pieceSelectedX === x && this.pieceSelectedY === y) {
      return true;
    } else {
      return false;
    }
  }

}
