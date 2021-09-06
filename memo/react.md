# Reactに関するメモ
・conponentsをまとめるデザインシステムはatomic Designで。

・create-react-appで環境構築をして、何かモジュールを新しくinstall&importして使うときはtsconfigに
「"noImplicitAny": false,」を追記しないとimportが出来ない。