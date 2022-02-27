var vigenere_table = [];

for(let i = 0; i < 26; i++)
{
  var curr_row = [];
  for(let j = 0; j < 26; j++)
  {
    var curr_char_code = 97 + j + i;
    if(curr_char_code > 122) curr_char_code -= 26;
    curr_row.push(String.fromCharCode(curr_char_code));
  }
  vigenere_table.push(curr_row);
}

function vigenere_encode(plaintext, key)
{
    var result = "";
    for(let i = 0; i < plaintext.length; i++)
    {
        if(plaintext.charCodeAt(i) < 97 || plaintext.charCodeAt(i) > 122)
        {
            result += plaintext[i];
            continue;
        }
        result += vigenere_table[key.charCodeAt(i % key.length) - 97][plaintext.charCodeAt(i) - 97];
    }
    return result;
}

function vigenere_decode(message, key)
{
    var result = "";
    for(let i = 0; i < message.length; i++)
    {
        if(message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122)
        {
            result += message[i];
            continue;
        }
        var char_code = message.charCodeAt(i) - key.charCodeAt(i % key.length);
        if(char_code < 0) char_code += 26;
        result += String.fromCharCode(char_code + 97);
    }
    return result;
}

function a()
{
    return String.fromCharCode(97);
}
