function validareCIF(s) {

    if (parseInt(s)!=s) // CIF is of form ROxxxxxxxxx
    {
        if (s.substring(0,2).toUpperCase()!=’RO’ || s.length > 12)
            return false;
        
        s = s.substring(2, s.length); //Extract only the numeric content
    }
    else // CIF is only numeric
    {
        if (s.length > 10)
            return false;
    }
    
    cifraControl = s.charAt(s.length – 1);
    content = s.substring(0, s.length – 1);
    while (content.length < 9)
    {
        content = '0' + content;
    }
    suma = content.charAt(0) * 7 + content.charAt(1) * 5 + content.charAt(2)
            * 3 + content.charAt(3) * 2 + content.charAt(4) * 1
            + content.charAt(5) * 7 + content.charAt(6) * 5 + content.charAt(7)
            * 3 + content.charAt(8) * 2;
    suma = suma * 10;
    rest = suma % 11;
    if (rest == 10)
        rest = 0;

    if (rest == cifraControl) {
        return true;
    }
    else
        return false;
}