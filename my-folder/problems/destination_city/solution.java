class Solution {
    public String destCity(List<List<String>> paths) {
        List<String> from = new ArrayList<String>();
        List<String> to = new ArrayList<String>();
        for (int i = 0 ; i < paths.size(); i++) {
            from.add(paths.get(i).get(0));
            to.add(paths.get(i).get(1));
        }
        for (String check : to){
            if (!from.contains(check)) return check;
        }
        return null;
    }
}