import { Component } from '@angular/core';

export enum Pieces {
  Possible,
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
  icons: String[] = ["assets/chessPieces/possible.png", "assets/chessPieces/blank.png", "assets/chessPieces/b_pawn_png_512px.png", "assets/chessPieces/b_bishop_png_512px.png", "assets/chessPieces/b_knight_png_512px.png",
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
  playerColor = "White";
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
    if (this.playersTurn) {
      if (this.board[y][x] == Pieces.Possible) {
        this.movePiece(x, y);
      } else {
        this.resetPossibilities();
        if (this.playerColor == "Black" && (this.board[y][x] > 0 && this.board[y][x] < 7)) {
          this.pieceSelectedX = x;
          this.pieceSelectedY = y;
        } else if (this.playerColor == "White" && this.board[y][x] > 6) {
          this.pieceSelectedX = x;
          this.pieceSelectedY = y;
        }
        this.findPossibilities(x, y);
      }
    }
  }

  movePiece(x: number, y: number) {
    this.board[y][x] = this.board[this.pieceSelectedY][this.pieceSelectedX];
    this.board[this.pieceSelectedY][this.pieceSelectedX] = Pieces.Empty;
    this.pieceSelectedX = x;
    this.pieceSelectedY = y;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.board[i][j] == Pieces.Possible) {
          this.board[i][j] = Pieces.Empty;
        }
      }
    }
    //this.playersTurn = !this.playersTurn;
  }

  resetPossibilities() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.board[i][j] == Pieces.Possible) {
          this.board[i][j] = Pieces.Empty;
        }
      }
    }
  }

  findPossibilities(x: number, y: number) {
    switch (this.board[y][x]) {
      case Pieces.BlackPawn:
      case Pieces.WhitePawn:
        if (y == 6) {
          this.board[y - 1][x] = Pieces.Possible;
          this.board[y - 2][x] = Pieces.Possible;
        }
        break;

      case Pieces.BlackRook:
      case Pieces.WhiteRook:
        for (let index = y + 1; index < 8; index++) {
          if (this.board[index][x] == Pieces.Empty) {
            this.board[index][x] = Pieces.Possible;
          } else {
            break;
          }
        }
        for (let index = y - 1; index >= 0; index--) {
          if (this.board[index][x] == Pieces.Empty) {
            this.board[index][x] = Pieces.Possible;
          } else {
            break;
          }
        }
        for (let index = x + 1; index < 8; index++) {
          if (this.board[y][index] == Pieces.Empty) {
            this.board[y][index] = Pieces.Possible;
          } else {
            break;
          }
        }
        for (let index = x - 1; index >= 0; index--) {
          if (this.board[y][index] == Pieces.Empty) {
            this.board[y][index] = Pieces.Possible;
          } else {
            break;
          }
        }
        break;

      default:
        break;
    }
  }
  isThisPieceSelected(x: number, y: number): boolean {
    if (this.playersTurn && this.pieceSelectedX === x && this.pieceSelectedY === y) {
      return true;
    } else {
      return false;
    }
  }

}
