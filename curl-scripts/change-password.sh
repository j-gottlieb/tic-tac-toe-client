
curl "https://aqueous-atoll-85096.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'${OLD}'",
      "new": "'${NEW}'"
    }
  }'

echo
