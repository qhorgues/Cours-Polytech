{
  description = "Dev shell avec Node.js et npm-check-updates";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux"; # adapte si besoin : aarch64-darwin, etc.
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.${system}.default = pkgs.mkShell {
        nativeBuildInputs = with pkgs.buildPackages; [
          nodePackages_latest.nodejs
          npm-check-updates
        ];
      };
    };
}
